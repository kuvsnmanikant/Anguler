import { AfterContentInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { NewNames } from '../services-observables-injection/new-names.dto';

@Component({
  selector: 'table-component[names][removename], test-multiselectors, .call-by-using-class, [call-by-attribute]', // here whatever we are keeping brackets are required when we are calling this component
  // here the , separated one we can even use  that as a tag to call this component
  // the name starts with . we can used it as html class insted of tag eg <div class = "call-by-using-class">
  // the last one is attribute in html to call this component eg : <div call-by-attribute >
  // we do have not selector need to check it once 
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit, AfterContentInit {

  constructor() { }

  @Input()
  names!: NewNames[];

  @ContentChild('localreference', {static: false}) localreference: any;  // if you give static to true then we can see this value in ngonint and ngonchanges
  @ViewChild('localreference', {static: false}) localreferenceview: any;
  @Output()
  removename = new EventEmitter<NewNames>();
  remove(removename: NewNames){
    this.removename.next(removename);
  }

  ngOnInit(): void {}

  ngAfterContentInit(){
    console.log(this.localreference);
  }

}
