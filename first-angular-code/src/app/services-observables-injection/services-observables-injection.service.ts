import { Injectable } from '@angular/core';
import { NewNames } from './new-names.dto';
import { Observable, BehaviorSubject, tap, map } from 'rxjs'; // this are provided by angular which will apply the operations asinc 
import { HttpClient } from '@angular/common/http';  // when we are importing this here we need to import httpclientmodule in module.ts

const resourceURL = 'http://localhost:3002/mocknames';

@Injectable()  // here we are using because we creating an instance in constructor
//({  this annotation is use this service via dependency injection
  // if we remove it we will get nullinjection error if you wont add this serivce in module
 // providedIn: 'root' // this is leve of aviailability of this service in applcation
//})
export class ServicesObservablesInjectionService {

 // private names = new BehaviorSubject([new NewNames('vijay',22), new NewNames('mani',23)]); // BehaviorSubject are data streams channel
  private names = new BehaviorSubject<NewNames[]>([]);

  constructor(
    private httpclient: HttpClient
  ) { }

  getAllNames(): Observable<NewNames[]>{ // here we are using observable becaues name is BehaviorSubject
    // ReadonlyArray by using this we will give access to read
   // return this.names;
   this.httpclient.get<NewNames[]>(resourceURL).pipe(tap(console.log)).pipe(map(ServicesObservablesInjectionService.mapNames))
   .subscribe(n => this.names.next(n));
   return this.names;
   // pipe are operations receive a Observable and return new one without modifing original one
   // tap operator return copy of the original, it will accept functions as parameters that does not return anything (like creating notifications)
   // map operator is used to transform the data
  }

  private static mapNames(item: {name: string, age: number, date: Date}[]){
    return item.map(item => new NewNames(item.name, item.age, item.date));
  }

  addName(newname: NewNames){
    // this.names.push(newname);
    this.httpclient.post(resourceURL,newname).subscribe(() => this.names.next(this.names.value.concat(newname)));
    // this.names.next(this.names.value.concat(newname)); // here we r using .value and .next because name is BehaviorSubject
  }

  removeName(removename: NewNames){
    this.httpclient.delete(`${resourceURL}/${removename.name}`).subscribe(() => this.names.next(this.names.value.filter(name => name != removename)))
    // this.names.next(this.names.value.filter(name => name != removename));
  }
}
