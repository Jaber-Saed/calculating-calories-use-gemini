import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './food-input.component.html',
  styleUrl: './food-input.component.scss'
})
export class FoodInputComponent {
  @Output() calculateCalories = new EventEmitter<string>();
  foodDescription: string = '';

  onCalculateCalories() {
    this.calculateCalories.emit(this.foodDescription);
  }
}
