import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsQuestionsComponent } from './sessions-questions.component';

describe('SessionsQuestionsComponent', () => {
  let component: SessionsQuestionsComponent;
  let fixture: ComponentFixture<SessionsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
