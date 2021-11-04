import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralAppsComponent } from './central-apps.component';

describe('CentralAppsComponent', () => {
  let component: CentralAppsComponent;
  let fixture: ComponentFixture<CentralAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
