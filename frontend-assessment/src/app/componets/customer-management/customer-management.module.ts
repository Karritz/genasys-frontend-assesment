import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManagementComponent } from './customer-management.component';
import {MatTableModule} from '@angular/material/table'
import { CustomerManagementRoutingModule } from './customer-management-routing/customer-management-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    CustomerManagementComponent
  ],
  imports: [
    MatSortModule,
    MatTableModule,
    CommonModule,
    CustomerManagementRoutingModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  exports: [CustomerManagementComponent],
  providers: []
})
export class CustomerManagementModule {}
