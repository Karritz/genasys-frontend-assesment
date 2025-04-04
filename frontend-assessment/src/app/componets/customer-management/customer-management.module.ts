import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManagementComponent } from './customer-management.component';
import {MatTableModule} from '@angular/material/table'
import { CustomerManagementRoutingModule } from './customer-management-routing/customer-management-routing.module';

@NgModule({
  declarations: [
    CustomerManagementComponent
  ],
  imports: [
    MatTableModule,
    CommonModule,
    CustomerManagementRoutingModule
  ],
  exports: [CustomerManagementComponent]
})
export class CustomerManagementModule {}
