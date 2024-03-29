import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedHomeComponent } from './logged-home.component';

describe('LoggedHomeComponent', () => {
  let component: LoggedHomeComponent;
  let fixture: ComponentFixture<LoggedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
