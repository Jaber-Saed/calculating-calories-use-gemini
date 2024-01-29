// calorie-calculator.component.ts

import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-calorie-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calorie-calculator.component.html',
  styleUrl: './calorie-calculator.component.scss'
})
export class CalorieCalculatorComponent {
  @Input() foodDescription: string = '';
  calories: number | null = null;

  // Implement your calorie calculation logic here
  // You can replace this with actual logic or connect to a service/API
  calculateCalories() {
    // Mock calculation for demonstration purposes
    this.calories = this.foodDescription.length * 10;
  }
}
