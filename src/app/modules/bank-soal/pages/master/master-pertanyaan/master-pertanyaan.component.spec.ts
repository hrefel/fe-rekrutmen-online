import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPertanyaanComponent } from './master-pertanyaan.component';

describe('MasterPertanyaanComponent', () => {
  let component: MasterPertanyaanComponent;
  let fixture: ComponentFixture<MasterPertanyaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPertanyaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPertanyaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
