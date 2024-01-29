import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-calorie-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calorie-calculator.component.html',
  styleUrl: './calorie-calculator.component.scss'
})
export class CalorieCalculatorComponent {
  @Input() calories: string | undefined;
}
