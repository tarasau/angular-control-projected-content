import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AxControlComponent } from './ax-control/ax-control.component';
import { ValidationComponent } from './validation/validation.component';
import { CommonModule } from '@angular/common';
import { NoOneValidatorDirective } from './directives/no-one.validator';
import { DateValidatorDirective } from "./directives/date-validator.validator";

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    AxControlComponent,
    ValidationComponent,
    NoOneValidatorDirective,
    DateValidatorDirective
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
