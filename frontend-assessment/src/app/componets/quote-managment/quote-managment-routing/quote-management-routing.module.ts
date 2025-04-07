import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteManagmentComponent } from '../quote-managment.component';

const routes: Routes = [
  {
    path: '',
    component: QuoteManagmentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class QuoteManagementRoutingModule { }
