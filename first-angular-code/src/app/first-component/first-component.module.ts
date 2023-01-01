import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FirstComponentComponent } from './first-component.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FirstComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDatepickerModule,
    FormsModule
  ],
  exports: [
    FirstComponentComponent
  ]
})
export class FirstComponentModule { }
