import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './interfaces/Customer';
import { Store } from '@ngrx/store';
import { editCustomer, initialCustomers, removeCustomer, setCustomers } from './customer-management.actions';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerManagementService } from './services/customer-management.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCustomerComponent } from './componets/edit-customer/edit-customer.component';

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

  constructor(private customerManagementService: CustomerManagementService, private router: Router, private store: Store<{ customers: Customer[] }>, private dialog: MatDialog) {
    this.customerManagementService.getMockCustomers().subscribe((res: any) => {
      this.setCustomers(res.customers);
    });
    this.customers$ = this.store.select('customers');
  }

  ngOnInit(): void {
    this.customers$.subscribe((res) => { console.log(res); this.dataSource = new MatTableDataSource(res) });
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
    this.store.dispatch(initialCustomers({ customers: customers }));
  }

  deleteCustomer(customer: Customer) {
    this.store.dispatch(removeCustomer({ customer: customer }))
  }

  editCustomer(customer: Customer) {
    this.dialog.open(EditCustomerComponent, { data: customer, minWidth: '450px', minHeight: '450px' }).afterClosed().subscribe((res: Customer | undefined) => {
      if (res) {
        this.store.dispatch(editCustomer({ customer: res }));
      }
    })
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openDetails(customer: Customer) {

  }

  navigateToQuotes(customer: Customer) {
    this.router.navigate(['/quotes'])
  }

}
