import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteManagmentComponent } from './quote-managment.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuoteManagementRoutingModule } from './quote-managment-routing/quote-management-routing.module';
import { EditQuoteComponent } from './componets/edit-quote/edit-quote.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuoteManagmentComponent,
    EditQuoteComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CommonModule,
    QuoteManagementRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    QuoteManagmentComponent
  ]
})
export class QuoteManagmentModule { }
