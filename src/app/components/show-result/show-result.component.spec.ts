import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResultComponent } from './show-result.component';

describe('ShowResultComponent', () => {
  let component: ShowResultComponent;
  let fixture: ComponentFixture<ShowResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
