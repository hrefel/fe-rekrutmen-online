import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRekrutmenComponent } from './web-rekrutmen.component';

describe('WebRekrutmenComponent', () => {
  let component: WebRekrutmenComponent;
  let fixture: ComponentFixture<WebRekrutmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebRekrutmenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebRekrutmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
