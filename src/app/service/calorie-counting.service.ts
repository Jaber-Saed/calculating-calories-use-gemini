import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CalorieCountingService {
  private chatGptApiUrl = '/v1/completions'; // Replace with the actual API endpoint
  private apiKey = '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'; // Replace with the actual API key

  constructor(private http: HttpClient) { }


  calculateCalories(food: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
      // Add other headers as needed based on the ChatGPT API documentation
    });

    const requestBody = {
      prompt: `Describe the food: "${food}"`,
      // Add other parameters as needed based on the GPT API documentation
    };

    // If your API requires an API key, include it in the headers
    if (this.apiKey) {
      headers.set('Authorization', `Bearer ${this.apiKey}`);
    }

    return this.http.post<string>(this.chatGptApiUrl, requestBody, { headers });
  }
}
