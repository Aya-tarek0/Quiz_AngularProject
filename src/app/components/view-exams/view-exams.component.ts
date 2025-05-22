import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../../core/services/ExamService';
@Component({
  selector: 'app-view-exams',
  imports: [],
  templateUrl: './view-exams.component.html',
  styleUrl: './view-exams.component.css'
})
export class ViewExamsComponent implements OnInit {
  exams: any[] = [];

  constructor(private examService: ExamService, private router: Router) {}

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams() {
    this.examService.getAllExamsByUser().subscribe({
      next: (res:any) => {
        this.exams = res;
      },
      error: (err:any) => {
        console.error('Failed to load exams:', err);
      }
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/exam-details', id]);
  }

  editExam(id: number) {
    this.router.navigate(['/edit-exam', id]);
  }

  deleteExam(id: number) {
    if (confirm('Are you sure you want to delete this exam?')) {
      this.examService.deleteExam(id).subscribe({
        next: () => {
          this.exams = this.exams.filter(exam => exam.id !== id);
        },
        error: (err) => {
          console.error('Failed to delete exam:', err);
        }
      });
    }
  }
}
