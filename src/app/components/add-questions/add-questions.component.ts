import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';import { QuestionService } from '../../core/services/QuestionService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-questions',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './add-questions.component.html',
  styleUrl: './add-questions.component.css'
})
export class AddQuestionsComponent {


  Question:FormGroup
  success : string = '';
  error : string = '';
    examId!: number;


  constructor( private fb : FormBuilder,private questionservice : QuestionService , private router : Router , private route : ActivatedRoute){
        this.Question = this.fb.group({
  text: ['', Validators.required],
  optionA: ['', Validators.required],
  optionB: ['', Validators.required],
  optionC: ['', Validators.required],
  optionD: ['', Validators.required],
  correctAnswer: ['', Validators.required],
});
    this.examId = Number(this.route.snapshot.paramMap.get('id'));

  }
AddQuestion() {
  if (this.Question.valid) {
    const questionData = {
      ...this.Question.value,
      examId: this.examId,
    };
    this.questionservice.add(questionData).subscribe({
      next: () => {
        this.Question.reset();
        this.success = 'Question Added';
        this.error = '';
      },
      error: (err: any) => {
        console.error('error', err);
        this.success = '';
        this.error = err?.error?.message || 'while adding';
      }
    });
  } else {
    this.error = 'add all fields';
    this.success = ''
  }
}

    get getText()
  {
    return this.Question.controls['text'];
  }




  viewDetails(id: number) {
    this.router.navigate(['/exam-details', id]);
  }
}
