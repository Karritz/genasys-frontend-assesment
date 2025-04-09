import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Quote } from '../../interfaces/Quote';
import { Customer } from 'src/app/componets/customer-management/interfaces/Customer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CustomerManagementService } from 'src/app/componets/customer-management/services/customer-management.service';
import { initialCustomers } from 'src/app/componets/customer-management/customer-management.actions';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {

  quote!: Quote
  customers$!: Observable<Customer[]>;
  customers: Customer[] = [];
  loading: boolean = true;
  selectedCustomer!: Customer;

  constructor(private dialogRef: MatDialogRef<CreateQuoteComponent>, private store: Store<{ customers: Customer[] }>, private customerManagementService: CustomerManagementService) {
    this.quote = {
      id: Math.floor( Math.random()*100),
      customerId: 0,
      customerName: "",
      amount: "",
      status: "",
      dateCreated: ""
    }
    this.customers$ = this.store.select('customers');
  }

  ngOnInit(): void {
    this.customers$.subscribe((res) =>{ 
      this.customers = res; 
      this.selectedCustomer = this.customers[0];
      if(this.customers.length > 0) {
        this.loading = false;
      } else {
        this.customerManagementService.getMockCustomers().subscribe((res:any) => {
          this.store.dispatch(initialCustomers(res));
        })
      }
    });
  }

  close() {
    this.dialogRef.close(undefined)
  }

  saveQuote() {
    this.quote.customerId = this.selectedCustomer.id;
    this.quote.customerName = this. selectedCustomer.firstName + " " + this.selectedCustomer.lastName;
    this.quote.dateCreated = new Date().toUTCString();
    console.log(this.quote);
    this.dialogRef.close(this.quote)
  }

}
