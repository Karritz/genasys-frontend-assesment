import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerManagementComponent } from '../customer-management.component';
import { QuoteManagmentComponent } from '../../quote-managment/quote-managment.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerManagementComponent
  }, 
  {
    path: ':name',
    component: QuoteManagmentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerManagementRoutingModule { }
