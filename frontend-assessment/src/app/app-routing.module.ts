import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./componets/customer-management/customer-management.module').then(m => m.CustomerManagementModule)
  },

  {
    path: 'quotes',
    loadChildren: () => import('./componets/quote-managment/quote-managment.module').then(m => m.QuoteManagmentModule)
  },

  {
    path: '',
    redirectTo:'customers',
    pathMatch: 'full'
  },

  {
    path:'**',
    redirectTo: 'customers',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
