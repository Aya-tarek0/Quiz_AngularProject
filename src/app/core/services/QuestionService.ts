import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl = 'http://localhost:5183';

  constructor(private http: HttpClient) {}

add(question: any) {
  const token = localStorage.getItem('userToken');
  const headers = {
    Authorization: `Bearer ${token}`
  };

  return this.http.post(`${this.baseUrl}/api/Question`, question, { headers });
}

  getQuestionById(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/question/${id}`);
}
update(id : number , data :any){
      return this.http.put(`${this.baseUrl}/api/Question/${id}` , data);

}

  deleteQuestion(id: number) {
    const token = localStorage.getItem('userToken');
  const headers = {
    Authorization: `Bearer ${token}`
  };
    return this.http.delete(`${this.baseUrl}/api/Question/${id}` , { headers });
  }
}
