import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../core/services/QuestionService';

@Component({
  selector: 'app-edit-question',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-question.component.html',
  styleUrl: './edit-question.component.css'
})

export class EditQuestionComponent implements OnInit {
  questionForm!: FormGroup;
  questionId!: number;
  success = '';
  error = '';

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private router: Router,private questionService: QuestionService ) {}

 ngOnInit(): void {
  this.questionId = Number(this.route.snapshot.paramMap.get('id'));

  this.questionForm = this.fb.group({
    text: ['', Validators.required],
    optionA: ['', Validators.required],
    optionB: ['', Validators.required],
    optionC: ['', Validators.required],
    optionD: ['', Validators.required],
    correctAnswer: ['', Validators.required]
  });

  this.questionService.getQuestionById(this.questionId).subscribe({
    next: (q) => {
      this.questionForm.setValue({
        text : q.text,
        optionA : q.optionA,
        optionB :q.optionB,
        optionC : q.optionC,
        optionD : q.optionD,
      correctAnswer : q.correctAnswer

      });console.log(q);
    },
    error: (err) => {
      this.error = 'Failed to load question';
      console.error(err);
    }
  });
}


  updateQuestion() {
    if (this.questionForm.valid) {
        const updatedQuestion = {
        text: this.questionForm.value.text,
        optionA: this.questionForm.value.optionA,
        optionB: this.questionForm.value.optionB,
        optionC: this.questionForm.value.optionC,
        optionD: this.questionForm.value.optionD,
        correctAnswer: this.questionForm.value.correctAnswer

      };
      this.questionService.update(this.questionId,updatedQuestion).subscribe({
        next: () => {
          this.success = 'Question updated successfully!';
          this.router.navigate(['/viewExams']);
        },
        error: (err) => {
          this.error = 'Error updating question';
          console.error(err);
        }
      });
    }
  }
}
