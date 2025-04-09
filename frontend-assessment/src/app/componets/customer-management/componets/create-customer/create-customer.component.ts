import { Component } from '@angular/core';
import { Customer } from '../../interfaces/Customer';
import { Address } from '../../interfaces/Address';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent {

  customer!: Customer

  constructor(private dialogRef: MatDialogRef<CreateCustomerComponent>) {
    this.customer = {
      id: Math.floor( Math.random()*100),
      firstName: "",
      lastName: "",
      addresses: [],
    }
   }

   deleteAddress(address: Address) {
      let index = this.customer.addresses.indexOf(address);
      let upadatedAddresses: Address[] = [...this.customer.addresses];
      if (upadatedAddresses.length == 1) {
        upadatedAddresses = []
      } else {
        upadatedAddresses = upadatedAddresses.splice(index - 1, 1);
      }
      this.customer.addresses = upadatedAddresses;
    }
  
    addAddress() {
      let upadatedAddresses: Address[] = [...this.customer.addresses];
      upadatedAddresses.push({
        street: "",
        city: "",
        suburb: "",
        postalCode: 0
      })
      this.customer.addresses = upadatedAddresses
    }
  
    close() {
      this.dialogRef.close(undefined)
    }
  
    saveQuote() {
      this.dialogRef.close(this.customer)
    }

}
