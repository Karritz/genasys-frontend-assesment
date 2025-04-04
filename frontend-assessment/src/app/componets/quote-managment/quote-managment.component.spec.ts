import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteManagmentComponent } from './quote-managment.component';

describe('QuoteManagmentComponent', () => {
  let component: QuoteManagmentComponent;
  let fixture: ComponentFixture<QuoteManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
