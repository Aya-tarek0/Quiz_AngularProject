import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResultsForUserComponent } from './all-results-for-user.component';

describe('AllResultsForUserComponent', () => {
  let component: AllResultsForUserComponent;
  let fixture: ComponentFixture<AllResultsForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllResultsForUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllResultsForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
