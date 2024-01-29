import { Component } from '@angular/core';
import { FoodInputComponent } from './components/food-input/food-input.component';
import { CalorieCalculatorComponent } from './components/calorie-calculator/calorie-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FoodInputComponent, CalorieCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  foodDescription: string = '';

  onCalculateCaloriesClick(foodDescription: string) {
    this.foodDescription = foodDescription;
  }
}
