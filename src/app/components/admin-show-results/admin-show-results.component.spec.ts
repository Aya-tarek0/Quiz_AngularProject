import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowResultsComponent } from './admin-show-results.component';

describe('AdminShowResultsComponent', () => {
  let component: AdminShowResultsComponent;
  let fixture: ComponentFixture<AdminShowResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminShowResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminShowResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
