// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalorieCalculatorComponent } from './components/calorie-calculator/calorie-calculator.component';
import { FoodInputComponent } from './components/food-input/food-input.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    FoodInputComponent,
    CalorieCalculatorComponent,
    BrowserModule,
    FormsModule,
  ],
  providers: [
  ],
  // bootstrap: [AppComponent],
})

export class AppModule { }
