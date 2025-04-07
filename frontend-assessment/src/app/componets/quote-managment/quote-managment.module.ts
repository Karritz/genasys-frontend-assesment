import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteManagmentComponent } from './quote-managment.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { QuoteManagementRoutingModule } from './quote-managment-routing/quote-management-routing.module';



@NgModule({
  declarations: [
    QuoteManagmentComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    CommonModule,
    QuoteManagementRoutingModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    QuoteManagmentComponent
  ]
})
export class QuoteManagmentModule { }
