import { Component } from '@angular/core';
import { FoodInputComponent } from './components/food-input/food-input.component';
import { CalorieCalculatorComponent } from './components/calorie-calculator/calorie-calculator.component';
import { FoodDescriptionService } from './service/food-description.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FoodInputComponent, CalorieCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  calories: number | undefined;

  constructor(private foodDescriptionService: FoodDescriptionService) { }

  onCalculateCalories(foodDescription: string) {
    // Call your GPT service to get food description

    this.foodDescriptionService.getDescription(foodDescription).subscribe(
      (description) => {

        // Mocking calorie calculation for demonstration
        // Replace this with your actual calorie calculation logic
        const mockedCalories = this.mockCalorieCalculation(description);
        this.calories = mockedCalories;
      },
      (error) => {
        console.error('Error getting food description:', error);
      }
    );
  }

  private mockCalorieCalculation(description: string): number {
    // Replace this with your actual calorie calculation logic
    // For now, just return a random number
    return Math.floor(Math.random() * 500) + 500;
  }
}
