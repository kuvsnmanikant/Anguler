import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ServicesObservablesInjectionComponent } from './services-observables-injection/services-observables-injection.component';
const routes: Routes = [
  {component: CalenderComponent, path: 'calender'},
  {component: FirstComponentComponent, path: 'firstcomponent'}, // in path we sould not give capital letters
  {component: ServicesObservablesInjectionComponent, path: 'servicesobservablesinjectioncomponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
