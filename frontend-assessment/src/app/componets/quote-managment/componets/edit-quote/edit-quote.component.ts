import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Quote } from '../../interfaces/Quote';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.scss']
})
export class EditQuoteComponent {

  quote!: Quote;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Quote, private dialogRef: MatDialogRef<EditQuoteComponent>) {
    this.quote = {
      customerId: data.customerId,
      id: data.id,
      customerName: data.customerName,
      amount: data.amount,
      status: data.status,
      dateCreated: data.dateCreated
    }
  }

  close() {
    this.dialogRef.close(undefined)
  }

  saveQuote() {
    this.dialogRef.close(this.quote)
  }

}
