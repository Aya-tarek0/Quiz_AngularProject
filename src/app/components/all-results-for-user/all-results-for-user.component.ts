import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../core/services/ResultService';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-results-for-user',
  imports: [CommonModule],
  templateUrl: './all-results-for-user.component.html',
  styleUrl: './all-results-for-user.component.css'
})
export class AllResultsForUserComponent implements OnInit{
Id:string = '';
  results: {userName: string; title: string; submitAt: string; score: number }[] = [];

  constructor(private resultSer :ResultService , private route : ActivatedRoute){
        this.Id = String(this.route.snapshot.paramMap.get('id'));


  }

  ngOnInit(){
    this.results = [];
 this.resultSer.getResultByUserId(this.Id).subscribe((data) => {
      console.log("Exam data:", data);

            this.results = data;



 })}
}
