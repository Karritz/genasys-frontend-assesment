import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManagementComponent } from './customer-management.component';
import {MatTableModule} from '@angular/material/table'
import { CustomerManagementRoutingModule } from './customer-management-routing/customer-management-routing.module';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CustomerManagementComponent
  ],
  imports: [
    MatSortModule,
    MatTableModule,
    CommonModule,
    CustomerManagementRoutingModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [CustomerManagementComponent],
  providers: []
})
export class CustomerManagementModule {}
