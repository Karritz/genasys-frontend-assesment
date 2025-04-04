import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteManagmentComponent } from './quote-managment.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    QuoteManagmentComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    QuoteManagmentComponent
  ]
})
export class QuoteManagmentModule { }
