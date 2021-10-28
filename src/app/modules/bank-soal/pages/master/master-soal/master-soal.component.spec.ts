import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSoalComponent } from './master-soal.component';

describe('MasterSoalComponent', () => {
  let component: MasterSoalComponent;
  let fixture: ComponentFixture<MasterSoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterSoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterSoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
