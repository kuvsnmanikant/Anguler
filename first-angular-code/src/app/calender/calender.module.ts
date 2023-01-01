import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './calender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { RouterModule} from '@angular/router';
import { PaintDirective } from './paint.directive';
@NgModule({
  declarations: [
    CalenderComponent,
    PaintDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    CalenderComponent
  ]
})
export class CalenderModule { }
