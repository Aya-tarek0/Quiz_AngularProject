import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../core/services/QuestionService';
import { FormsModule } from '@angular/forms';
import { ExamService } from '../../core/services/ExamService';
import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-take-exam',
  imports: [FormsModule],
  templateUrl: './take-exam.component.html',
  styleUrl: './take-exam.component.css'
})
export class TakeExamComponent implements OnInit {
  examId!: number;
  questions: any[] = [];
  answers: { [questionId: number]: string } = {};
 userId :string = '';
  constructor(
    private route: ActivatedRoute,
    private questionService: ExamService,
    private http: HttpClient,
    private router : Router
  ) {}

  ngOnInit(): void {
  this.examId = Number(this.route.snapshot.paramMap.get('id'));

  this.questionService.getExamById(this.examId).subscribe({
    next: (res) => {
      console.log('API response:', res);

      if (res && res.questions) {
        this.questions = res.questions;
        this.userId = res.userId;
      } else {
        console.error('Unexpected response format:', res);
      }
    },
    error: (err) => {
      console.error('Error fetching questions:', err);
    }
  });
}
submitExam() {
  const token = localStorage.getItem('userToken')!;
  const userData: any = jwtDecode(token);
  const userId = userData['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

  const data = {
    userId: userId,
    examId: this.examId,
    answers: Object.entries(this.answers).map(([questionId, selectedOption]) => ({
      questionId: Number(questionId),
      selectedOption
    }))
  };


  this.http.post<any>('http://localhost:5183/api/Exam/submit', data).subscribe({
    next: (res) => {
      const correct = res.score;
      const total = Object.keys(this.answers).length;
      const wrong = total - correct;
     this.router.navigate(['/showResult' , res.id], { queryParams: { total } });
      //alert(`Correct: ${correct}\n Wrong: ${wrong}\n Score: ${correct}/${total}`);


    },
    error: (err) => {
      console.error('Submission error', err);
      alert('Failed to submit exam');
    }
  });
}

}
