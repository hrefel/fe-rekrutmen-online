import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSoalComponent } from './bank-soal.component';

describe('BankSoalComponent', () => {
  let component: BankSoalComponent;
  let fixture: ComponentFixture<BankSoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankSoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankSoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
