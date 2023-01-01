import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // this is used to fetch the values send from one page to anouther 
import { map } from 'rxjs';
import { Names } from './Names';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  classVar='is-done';

  constructor(private route: ActivatedRoute) {} // loading the values send from another page to another
  selecteddate!: Date // declaring the variable without initializing the value

  ngOnInit(): void {  // to learn more about life cycle hooks go to angular.io/guide/lifecycle-hooks
    this.selecteddate = new Date(this.route.snapshot.params['date']); // fetching the values from  quary params
    this.route.paramMap.pipe(map(() => window.history.state)).subscribe(res=>{console.log(res.currentname)}); // this is how we will fetch the complex data
  }

  title = 'click here to add one more name';
  names: Names[] =  [new Names("kemisetty"),new Names("uma"),new Names("vijay"),new Names("sai"),new Names("naga"),new Names("manikant")];
  somevalue!: string;


  add(newName: string){
    this.names.push(new Names(newName));
    //here we need to use this key word to refere other variables/functions in the same instance
  }
  remove(removeName: Names){
    var userConformation = confirm('are rou sure you want to delete');
    if(userConformation){
    this.names= this.names.filter(name => name != removeName);
    }
  }

  addnewname:string = '';
  addnewnamefun(){ 
    this.names.push(new Names(this.addnewname));
    this.addnewname=''; // resetting the value to null
  }

  selecteddatefun(tagformtwo: NgForm){  // this function is to do the configuration in the component.ts than in html 
    if (tagformtwo.touched == false){return;} 
    if (tagformtwo.valid == false){return;}  // we are using this to validate the "required" input in the form, we need to use required tag in html
    tagformtwo.reset({setdate: new Date()})
  }
}
