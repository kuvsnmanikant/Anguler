import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstComponentModule } from './first-component/first-component.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderModule } from './calender/calender.module';
import { ServicesObservablesInjectionModule } from './services-observables-injection/services-observables-injection.module';
import { GlobalErrorHandler } from './GlobalErrorHandler';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstComponentModule,
    CalenderModule,
    ServicesObservablesInjectionModule,
    HttpClientModule
  ],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
