import { QuestionService } from './../../core/services/QuestionService';
import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../core/services/ExamService';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-exam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-exam.component.html',
  styleUrl: './show-exam.component.css'
})
export class ShowExamComponent implements OnInit {
  id:number;
 exam: any;

  constructor(private ExamSer : ExamService ,private route : ActivatedRoute , private router : Router , private question : QuestionService){
    this.id = Number(this.route.snapshot.paramMap.get('id'));

  }



ngOnInit() {
  this.ExamSer.getExamById(this.id).subscribe((data) => {
    console.log("Exam data:", data);
    this.exam = data;
  });
}

editQuestion(id: number) {
  this.router.navigate(['/edit-question' ,id])
}

addQuestion(id:number) {
  this.router.navigate(['/AddQuestions' , id])
}

deleteQuestion(id: number) {
  if (confirm("Are you sure you want to delete this question?")) {
    this.question.deleteQuestion(id).subscribe(() => {
      this.exam.questions = this.exam.questions.filter((q: any) => q.id !== id);
    });
  }
}


}

