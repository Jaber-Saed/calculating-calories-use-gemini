import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalorieCalculatorComponent } from './components/calorie-calculator/calorie-calculator.component';
import { FoodInputComponent } from './components/food-input/food-input.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    FoodInputComponent,
    CalorieCalculatorComponent,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],

  // bootstrap: [AppComponent],
})

export class AppModule { }
