import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaWebComponent } from './beranda-web.component';

describe('BerandaWebComponent', () => {
  let component: BerandaWebComponent;
  let fixture: ComponentFixture<BerandaWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerandaWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerandaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
