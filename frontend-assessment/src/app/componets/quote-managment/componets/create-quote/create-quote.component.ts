import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Quote } from '../../interfaces/Quote';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {

  quote!: Quote

  constructor(private dialogRef: MatDialogRef<CreateQuoteComponent>) { }

  ngOnInit(): void {
    this.quote = {
      id: Math.floor( Math.random()*100),
      customerId: 0,
      customerName: "",
      amount: "",
      status: "",
      dateCreated: ""

    }
  }

  close() {
    this.dialogRef.close(undefined)
  }

  saveQuote() {
    this.dialogRef.close(this.quote)
  }

}
