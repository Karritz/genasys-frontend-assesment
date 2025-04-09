import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './interfaces/Quote';
import { MatTableDataSource } from '@angular/material/table';
import { QuoteManagementService } from './services/quote-management.service';
import { Store } from '@ngrx/store';
import { removeQuote, initialQuotes, editQuote, addQuote } from './quote-managment.actions';
import { MatDialog } from '@angular/material/dialog';
import { EditQuoteComponent } from './componets/edit-quote/edit-quote.component';
import { CreateQuoteComponent } from './componets/create-quote/create-quote.component';

@Component({
  selector: 'app-quote-managment',
  templateUrl: './quote-managment.component.html',
  styleUrls: ['./quote-managment.component.scss']
})
export class QuoteManagmentComponent implements OnInit{

  quote$!: Observable<Quote[]>

  dataSource!: MatTableDataSource<Quote>;
  displayedColumns = ["customerName", "amount", "status", "dateCreated", "actions"]

  selectedCustomer: string | null = sessionStorage.getItem("selectedCustomer");
  filterValue = '';

  constructor(private quoteManagementService: QuoteManagementService, private store: Store<{ quotes: Quote[] }>, private dialog: MatDialog) {
    this.quoteManagementService.getMockQuotes().subscribe((res: any) => {
      this.setQuotes(res.quotes);
    });
    this.quote$ = this.store.select('quotes');
  }

  ngOnInit(): void {
    this.quote$.subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      if(this.selectedCustomer) {
        this.filterValue = this.selectedCustomer
        this.dataSource.filter = this.selectedCustomer.trim().toLowerCase();
        sessionStorage.removeItem("selectedCustomer");
      }
    })
  }

  setQuotes(quotes: Quote[]) {
    this.store.dispatch(initialQuotes({ quotes: quotes }))
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteQuote(quote: Quote) {
    this.store.dispatch(removeQuote({ quote: quote }))
  }

  editQuote(quote: Quote) {
    this.dialog.open(EditQuoteComponent, { data: quote, width: '450px', minHeight: '450px' }).afterClosed().subscribe((res: Quote | undefined) => {
      if (res) {
        this.store.dispatch(editQuote({ quote: res }));
      }
    })
  }

  addQuote() {
    this.dialog.open(CreateQuoteComponent, { width: '450px', minHeight: '450px' }).afterClosed().subscribe((res: Quote | undefined) => {
      if (res) {
        this.store.dispatch(addQuote({ quote: res }));
      }
    });
  }

}
