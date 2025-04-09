import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManagementComponent } from './customer-management.component';
import {MatTableModule} from '@angular/material/table'
import { CustomerManagementRoutingModule } from './customer-management-routing/customer-management-routing.module';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EditCustomerComponent } from './componets/edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './componets/create-customer/create-customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerManagementComponent,
    EditCustomerComponent,
    CreateCustomerComponent
  ],
  imports: [
    MatSortModule,
    MatTableModule,
    CommonModule,
    CustomerManagementRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [CustomerManagementComponent],
  providers: []
})
export class CustomerManagementModule {}
