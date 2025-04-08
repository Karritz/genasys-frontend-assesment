import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { customerReducer } from './componets/customer-management/customer-management.reducer';
import { quoteReducer } from './componets/quote-managment/quote-managment.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      customers: customerReducer,
      quotes: quoteReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
