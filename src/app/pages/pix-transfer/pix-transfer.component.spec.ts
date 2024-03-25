import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixTransferComponent } from './pix-transfer.component';

describe('PixTransferComponent', () => {
  let component: PixTransferComponent;
  let fixture: ComponentFixture<PixTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PixTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
