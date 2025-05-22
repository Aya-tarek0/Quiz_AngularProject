import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamOperationComponent } from './exam-operation.component';

describe('ExamOperationComponent', () => {
  let component: ExamOperationComponent;
  let fixture: ComponentFixture<ExamOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
