import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../core/services/ResultService';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-show-results',
  imports: [FormsModule ,CommonModule],
  templateUrl: './admin-show-results.component.html',
  styleUrl: './admin-show-results.component.css'
})
export class AdminShowResultsComponent implements OnInit{
id:number
  results: { userName: string; title: string; submitAt: string; score: number }[] = [];

  constructor(private resultSer :ResultService , private route : ActivatedRoute){
        this.id = Number(this.route.snapshot.paramMap.get('id'));


  }

  ngOnInit(){
 this.resultSer.getResultByExamId(this.id).subscribe((data) => {
      console.log("Exam data:", data);
            this.results = data;



 })}
}
