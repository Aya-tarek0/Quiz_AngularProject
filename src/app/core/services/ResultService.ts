import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private baseUrl = 'http://localhost:5183';

  constructor(private http: HttpClient) {}


  getResultById(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/api/Result/${id}`);
}
  getResultByUserId(id: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/api/Result/user/${id}`);
}
  getResultByExamId(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/api/Result/Exam/${id}`);
}
}
