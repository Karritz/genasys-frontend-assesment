import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerManagementService {

  constructor(private httpClient: HttpClient) {}

  getMockCustomers() {
    return this.httpClient.get("./assets/data/customerData.json")
  }
}
