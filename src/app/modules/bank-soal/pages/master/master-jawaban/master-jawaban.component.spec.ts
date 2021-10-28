import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterJawabanComponent } from './master-jawaban.component';

describe('MasterJawabanComponent', () => {
  let component: MasterJawabanComponent;
  let fixture: ComponentFixture<MasterJawabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterJawabanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterJawabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
