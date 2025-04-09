import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../../interfaces/Customer';
import { Address } from '../../interfaces/Address';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent {

  customer!: Customer

  constructor(@Inject(MAT_DIALOG_DATA) public data: Customer, private dialogRef: MatDialogRef<EditCustomerComponent>) {
    this.customer = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      addresses: data.addresses,
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
