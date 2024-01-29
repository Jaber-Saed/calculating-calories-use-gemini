import { Component } from '@angular/core';
import { FoodInputComponent } from './components/food-input/food-input.component';
import { CalorieCalculatorComponent } from './components/calorie-calculator/calorie-calculator.component';
import { CalorieCountingService } from './service/calorie-counting.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FoodInputComponent, CalorieCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  calories: string | undefined;

  constructor(private calorieCountingService: CalorieCountingService) { }

  onCalculateCalories(foodDescription: string) {

    this.calorieCountingService.calculateCalories(foodDescription).subscribe(
      (description) => {
        const mockedCalories = this.mockCalorieCalculation(description);
        this.calories = mockedCalories;
      },
      (error) => {
        console.error('Error getting food description:', error);
      }
    );
  }

  private mockCalorieCalculation(description: string): string {
    console.log('Food description:', description);
    return description;
  }
}
