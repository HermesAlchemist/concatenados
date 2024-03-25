import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStatementsListComponent } from './bank-statements-list.component';

describe('BankStatementsListComponent', () => {
  let component: BankStatementsListComponent;
  let fixture: ComponentFixture<BankStatementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankStatementsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankStatementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
