import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLowonganComponent } from './master-lowongan.component';

describe('MasterLowonganComponent', () => {
  let component: MasterLowonganComponent;
  let fixture: ComponentFixture<MasterLowonganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterLowonganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLowonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
