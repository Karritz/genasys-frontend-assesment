import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './interfaces/Customer';
import { Store } from '@ngrx/store';
import { setCustomers } from './customer-management.actions';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit, AfterViewInit {

  customers$!: Observable<Customer[]>;

  dataSource!: MatTableDataSource<Customer>;
  displayedColumns = ["firstName", "lastName", "addresses", "actions"];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private httpClient: HttpClient, private router: Router, private store: Store<{ customers: Customer[] }>) {
    this.httpClient.get("./assets/data/customerData.json").subscribe((res: any) => {
      this.setCustomers(res.customers);
    });
    this.customers$ = this.store.select('customers');
  }

  ngOnInit(): void {
    this.customers$.subscribe((res) => this.dataSource = new MatTableDataSource(res));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.sort.sortChange.subscribe(res => {
      let data = [...this.dataSource.data];
      if (res.active == 'firstName') {
        if (res.direction == 'desc') {
          data = data.sort((a, b) => {
            if (a.firstName < b.firstName) { return 1; }
            if (a.firstName > b.firstName) { return -1; }
            return 0;
          });
        } else {
          data = data.sort((a, b) => {
            if (a.firstName < b.firstName) { return -1; }
            if (a.firstName > b.firstName) { return 1; }
            return 0;
          });
        }
        this.dataSource.data = data
      }
      if (res.active == 'lastName') {
        if (res.direction == 'desc') {
          data = data.sort((a, b) => {
            if (a.lastName < b.lastName) { return 1; }
            if (a.lastName > b.lastName) { return -1; }
            return 0;
          });
        } else {
          data = data.sort((a, b) => {
            if (a.lastName < b.lastName) { return -1; }
            if (a.lastName > b.lastName) { return 1; }
            return 0;
          });
        }
        this.dataSource.data = data
      }
      if (res.active == 'addresses') {
        if (res.direction == 'desc') {
          data = data.sort((a, b) => {
            if (a.addresses.length < b.addresses.length) { return -1; }
            if (a.addresses.length > b.addresses.length) { return 1; }
            return 0;
          });
        } else {
          data = data.sort((a, b) => {
            if (a.addresses.length < b.addresses.length) { return 1; }
            if (a.addresses.length > b.addresses.length) { return -1; }
            return 0;
          });
        }
        this.dataSource.data = data
      }
      
    })
  }

  setCustomers(customers: Customer[]) {
    this.store.dispatch(setCustomers({ customers: customers }));
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openDetails(customer: Customer) {
    
  }

}
