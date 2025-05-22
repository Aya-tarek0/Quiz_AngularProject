import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ExamService } from '../../core/services/ExamService';

@Component({
  selector: 'app-add-exam',
  imports: [CommonModule , RouterLink, ReactiveFormsModule],
  templateUrl: './add-exam.component.html',
  styleUrl: './add-exam.component.css'
})
export class AddExamComponent {
  ExamForm: FormGroup;
  success : string = ''
  error : string = ''
  constructor(private fb : FormBuilder,private examservice : ExamService , private router : Router){
   this.ExamForm = this.fb.group({
  title: ['', Validators.required],
  description: ['', [Validators.required, Validators.minLength(6)]],
});
  }
  addExam(){
  if (this.ExamForm.valid) {
    this.examservice.add(this.ExamForm.value).subscribe({
      next: (res:any) => {
       const examId = res.id;
        this.success = 'Added Successfully';
        this.router.navigate(['/AddQuestions', examId]);      },
      error: (err:any) => {
        this.error = 'Error ' + err;

      }
    });
  }

   else
    {
      this.ExamForm.setErrors({mismatch:true});
      this.ExamForm.markAllAsTouched()
    }
}

  get gettitle()
  {
    return this.ExamForm.controls['title'];
  }
    get getdescription()
  {
    return this.ExamForm.controls['description'];
  }
    viewDetails(id: number) {
    this.router.navigate(['/exam-details', id]);
  }
}
