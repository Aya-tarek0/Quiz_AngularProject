import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../core/services/ExamService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-available-exams',
  imports: [CommonModule ,FormsModule, RouterLink],
  templateUrl: './available-exams.component.html',
  styleUrl: './available-exams.component.css'
})
export class AvailableExamsComponent implements OnInit{
 exams: any[] = [];
  filteredExams: any[] = [];
  searchTerm = '';
  constructor(private examSer : ExamService){}

ngOnInit(){
  this.examSer.getExams().subscribe({
      next: (res:any) => {
        this.exams = res;
        this.filteredExams = res;
      },
      error: (err:any) => {
        console.error('Failed to load exams:', err);
      }
    });
}

  filterExams() {
    const term = this.searchTerm.toLowerCase();
    this.filteredExams = this.exams.filter(
      exam =>
        exam.title.toLowerCase().includes(term) ||
        exam.description.toLowerCase().includes(term)
    );
  }

}
