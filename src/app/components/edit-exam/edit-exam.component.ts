import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../../core/services/ExamService';

@Component({
  selector: 'app-edit-exam',
  templateUrl: './edit-exam.component.html',
  imports : [ReactiveFormsModule],
  styleUrls: ['./edit-exam.component.css'] })

export class EditExamComponent implements OnInit {
  examForm!: FormGroup;
  examId!: number;
  success = '';
  error = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private examService: ExamService
  ) {}

  ngOnInit(): void {
    this.examId = Number(this.route.snapshot.paramMap.get('id'));

    this.examForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      userId: [''],
      createdAt: ['']
    });

    this.examService.getExamById(this.examId).subscribe({
      next: (exam) => {
        this.examForm.value({
          title: exam.title,
          description: exam.description,
          userId: exam.userId,
          createdAt: exam.createdAt
        });
      },
      error: (err) => {
        this.error = 'Failed to load exam';
        console.error(err);
      }
    });
  }

  updateExam() {
    if (this.examForm.valid) {
      const updatedExam = {
        title: this.examForm.value.title,
        description: this.examForm.value.description
      };

      this.examService.updateExam(this.examId, updatedExam).subscribe({
        next: () => {
          this.success = 'Exam updated successfully!';
          setTimeout(() => this.router.navigate(['/exams']), 1500);
        },
        error: (err) => {
          this.error = 'Error updating exam';
          console.error(err);
        }
      });
    }
  }
}
