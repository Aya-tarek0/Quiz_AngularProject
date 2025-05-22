import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../core/services/ResultService';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-result',
  imports: [CommonModule],
  templateUrl: './show-result.component.html',
  styleUrl: './show-result.component.css'
})
export class ShowResultComponent implements OnInit {
  resultSummary = {
    score: 0,
    total: 0,

  };

  userName: string = '';
  title: string = '';
  submitAt: any;
  id: number;

  constructor(private resultSer: ResultService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
    const totalFromQuery = Number(params['total']);
  
      this.resultSummary.total = totalFromQuery;

  });

    this.resultSer.getResultById(this.id).subscribe((data) => {
      console.log("Exam data:", data);

      this.userName = data.userName;
      this.title = data.title;
      this.submitAt = data.submitAt;
      this.resultSummary.score = data.score;


    });
  }
}
