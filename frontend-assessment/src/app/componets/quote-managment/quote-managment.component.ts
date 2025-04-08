import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './interfaces/Quote';
import { MatTableDataSource } from '@angular/material/table';
import { QuoteManagementService } from './services/quote-management.service';
import { Store } from '@ngrx/store';
import { setQuotes, removeQuote, initialQuotes } from './quote-managment.actions';

@Component({
  selector: 'app-quote-managment',
  templateUrl: './quote-managment.component.html',
  styleUrls: ['./quote-managment.component.scss']
})
export class QuoteManagmentComponent implements OnInit {

  quote$!: Observable<Quote[]>

  dataSource!: MatTableDataSource<Quote>;
  displayedColumns = ["customerName", "amount", "status", "dateCreated", "actions"]

  constructor(private quoteManagementService: QuoteManagementService, private store: Store<{quotes: Quote[]}>) { 
    this.quoteManagementService.getMockQuotes().subscribe((res: any) => {
      this.setQuotes(res.quotes);
    });
    this.quote$ = this.store.select('quotes');
  }

  ngOnInit(): void {
    this.quote$.subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
    })
  }

  setQuotes(quotes: Quote[]) {
    this.store.dispatch(initialQuotes({quotes: quotes}))
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteQuote(quote: Quote) {
    this.store.dispatch(removeQuote({quote: quote}))
  }

}
