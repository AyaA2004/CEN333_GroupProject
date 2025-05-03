import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlAinComponent } from './al-ain.component';

describe('AlAinComponent', () => {
  let component: AlAinComponent;
  let fixture: ComponentFixture<AlAinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlAinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlAinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
