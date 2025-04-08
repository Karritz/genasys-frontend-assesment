import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteManagementService {

  constructor(private httpClient: HttpClient) {}
  
    getMockQuotes() {
      return this.httpClient.get("./assets/data/quoteData.json")
    }
}
