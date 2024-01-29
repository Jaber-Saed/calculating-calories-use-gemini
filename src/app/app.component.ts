import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  foodDescription: string = '';

  onCalculateCaloriesClick(foodDescription: string) {
    this.foodDescription = foodDescription;
  }
}
