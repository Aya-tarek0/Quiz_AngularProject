import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private baseUrl = 'http://localhost:5183';

  constructor(private http: HttpClient) {}

 getAllExamsByUser() {
  const token = localStorage.getItem('userToken');
  const headers = {
    Authorization: `Bearer ${token}`
  };
  return this.http.get<any[]>(`${this.baseUrl}/api/Exam/user`, { headers });
}

add(exam: any) {
  const token = localStorage.getItem('userToken');
  const headers = {
    Authorization: `Bearer ${token}`
  };

  return this.http.post(`${this.baseUrl}/api/Exam`, exam, { headers });
}


  deleteExam(id: number) {
    return this.http.delete(`${this.baseUrl}/api/Exam/${id}`);
  }

  getExamById(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/api/Exam/${id}`);
}
updateExam(id: number, data: any) {
  return this.http.put(`${this.baseUrl}/api/Exam/${id}`, data);
}
  getExams(): Observable<any> {
  return this.http.get(`${this.baseUrl}/api/Exam/GetAll`);
}

}
