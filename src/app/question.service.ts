import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, ObservableInput } from 'rxjs';

import { Question } from './question';


@Injectable()
export class QuestionService {
  private url = "http://localhost:8000/api";

  /**
  * @param {HttpClient} http
  */
  constructor(
    private http: HttpClient) { }

  /**
  * @returns {Observable<Question[]>}
  */
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url + '/questions', { responseType: 'json' });
  }

  /**
  * @param {string} id
  * @returns {Observable<Question[]>}
  */
  getQuestion(id: string): Observable<Question> {
    return this.http.get<Question>(this.url + `/question/${id}`, { responseType: 'json' });
  }

  /**
  * @param {number} id
  * @param {Question} question
  * @returns {Observable<any>}
  */
 editQuestion(id: number, question): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.put(this.url + `/edit/${id}`, question, httpOptions)
}

/**
  * @param {} question
  * @returns {Observable<any>}
  */
 createQuestion(question): Observable<any> {
  const httpOptions = { 
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.post<Question>(this.url + '/new', question, httpOptions);
}

/**
* @param {string} id
* @returns {Observable<any>}
*/
deleteQuestion(id: string): Observable<any> {
  return this.http.delete(this.url +  `/delete/${id}`)
}

}
