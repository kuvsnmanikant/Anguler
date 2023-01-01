import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesObservablesInjectionComponent } from './services-observables-injection.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ServicesObservablesInjectionService } from './services-observables-injection.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponentComponent } from '../table-component/table-component.component';


@NgModule({
  declarations: [
    ServicesObservablesInjectionComponent,
    TableComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  exports: [
    ServicesObservablesInjectionComponent
  ],
  providers: [   // this is where we will declare our service.ts so that this is available only for this perticular module 
  // we will use this insted of @Injectable decorator in service.ts 
    ServicesObservablesInjectionService
  ]
})
export class ServicesObservablesInjectionModule { }
