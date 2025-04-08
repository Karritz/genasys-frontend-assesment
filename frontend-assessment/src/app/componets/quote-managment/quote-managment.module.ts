import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteManagmentComponent } from './quote-managment.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuoteManagementRoutingModule } from './quote-managment-routing/quote-management-routing.module';



@NgModule({
  declarations: [
    QuoteManagmentComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CommonModule,
    QuoteManagementRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [
    QuoteManagmentComponent
  ]
})
export class QuoteManagmentModule { }
