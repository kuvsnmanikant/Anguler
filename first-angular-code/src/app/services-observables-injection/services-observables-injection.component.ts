import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // this is used to fetch the values send from one page to anouther 
import { NewNames } from './new-names.dto';
import { ServicesObservablesInjectionService } from './services-observables-injection.service';

@Component({
  selector: 'app-services-observables-injection',
  templateUrl: './services-observables-injection.component.html',
  styleUrls: ['./services-observables-injection.component.css'],
  providers: [] // this will be used to provide the instance of the service to this perticular component 
})
export class ServicesObservablesInjectionComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private nameservice: ServicesObservablesInjectionService  // here we are using angular in built function injection to get the same instance of service every time
  ) { }

  selecteddate!: Date;
  addnewname!: string;
  age!: number;
  names = this.nameservice.getAllNames();

  ngOnInit(): void {
    this.selecteddate = new Date(this.route.snapshot.params['date']);
  }

  remove(removeName: NewNames){
    var userConformation = confirm('are rou sure you want to delete');
    if(userConformation){
      this.nameservice.removeName(removeName);
    }
  }

  addnewnamefun(){ 
    this.nameservice.addName(new NewNames(this.addnewname, this.age,this.selecteddate));
    this.addnewname = ''; // resetting the value to null
    this.age = 0;
    this.selecteddate = new Date();
  }

}
