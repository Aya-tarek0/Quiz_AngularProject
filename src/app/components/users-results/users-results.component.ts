import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../core/services/ExamService';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-results',
  imports: [CommonModule ,ReactiveFormsModule ,FormsModule],
  templateUrl: './users-results.component.html',
  styleUrl: './users-results.component.css'
})
export class UsersResultsComponent implements OnInit {
  exams: { id: number; title: string }[] = [];
  selectedExamId?: number;

  constructor(
    private examService: ExamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.examService.getAllExamsByUser().subscribe({
      next: exams => this.exams = exams,
      error: err => console.error('Failed to load exams', err)
    });
  }

  onSelect(idStr: string) {
    const id = Number(idStr);
    this.selectedExamId = id;
    this.router.navigate(['/AllResultsForAdmin', id]);
  }
}
