import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpjsCheckingComponent } from './bpjs-checking.component';

describe('BpjsCheckingComponent', () => {
  let component: BpjsCheckingComponent;
  let fixture: ComponentFixture<BpjsCheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpjsCheckingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpjsCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
