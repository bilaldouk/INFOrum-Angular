import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Answer } from './answer';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  // This is the Symfony REST API URL
  private url = "http://localhost:8000/api";

  /**
  * Construct the category service
  * @param {HttpClient} http
  */
  constructor(private http: HttpClient) { }

  /**
  * Get All the categories
  * @returns {Observable<Answer[]>}
  */
  getAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.url + '/answers', { responseType: 'json' });
  }

  getAnswer(id: string): Observable<Answer> {
    return this.http.get<Answer>(this.url + '/answer/' + id, { responseType: 'json' });
  } 

  /**
  * Create a category
  * @param {Answer} answer
  * @returns {Observable<any>}
  */
  postAnswer(answer: Answer): Observable<any> {    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Answer>(this.url + '/new/answer', answer, httpOptions);
  }
}
