import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalorieCountingService {
   public apiKey: string = "AIzaSyBUGspwcIK5ciYFDq40DJwUiPDGs54RX4U"

  private readonly API_URL = 'https://api.geminivisionpro.com/v1/predict/calorie_counting';

  constructor(private http: HttpClient) { }

  calculateCalories(foodDescription: string, image: File): Observable<string> {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('food_description', foodDescription);

    const params = new HttpParams()
      .set('model_id', 'calorie-counting-v1');

    return this.http.post<string>(this.API_URL, formData, { params });
  }
}
