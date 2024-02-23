import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStatementsComponent } from './bank-statements.component';

describe('BankStatementsComponent', () => {
  let component: BankStatementsComponent;
  let fixture: ComponentFixture<BankStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankStatementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
