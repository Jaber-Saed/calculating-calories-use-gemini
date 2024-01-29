// food-description.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FoodDescriptionService {
  private gptApiUrl = 'YOUR_GPT_API_ENDPOINT'; // Replace with the actual API endpoint
  private apiKey = 'YOUR_API_KEY'; // Replace with the actual API key if required

  constructor(private http: HttpClient) { }

  getDescription(food: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const requestBody = {
      prompt: `Describe the food: "${food}"`,
      // Add other parameters as needed based on the GPT API documentation
    };

    // If your API requires an API key, include it in the headers
    if (this.apiKey) {
      headers.set('Authorization', `Bearer ${this.apiKey}`);
    }

    return this.http.post<string>(this.gptApiUrl, requestBody, { headers });
  }
}
