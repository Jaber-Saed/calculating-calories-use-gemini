import { Component } from '@angular/core';
import { FoodInputComponent } from './components/food-input/food-input.component';
import { CalorieCalculatorComponent } from './components/calorie-calculator/calorie-calculator.component';
import { CalorieCountingService } from './service/calorie-counting.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FoodInputComponent, CalorieCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  calories: string | undefined;
  public img: any = null;
  constructor(private calorieCountingService: CalorieCountingService) { }

  onCalculateCalories(foodDescription: string) {
    this.calorieCountingService.calculateCalories(foodDescription, this.img).subscribe((calories) => {
      this.calories = calories;
    }
    )
  }



  onUploadImage(image: File) {
    this.img = image
  }

}

