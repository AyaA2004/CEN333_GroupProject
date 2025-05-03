import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbuDhabiComponent } from './abu-dhabi.component';

describe('AbuDhabiComponent', () => {
  let component: AbuDhabiComponent;
  let fixture: ComponentFixture<AbuDhabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbuDhabiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbuDhabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
