import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Question } from './question';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions = [
      { id: 11, title: 'Question 11', content: 'Content of question 11', author: 'John Doe' },
      { id: 12, title: 'Question 12', content: 'Content of question 12', author: 'John Doe' },
      { id: 13, title: 'Question 13', content: 'Content of question 13', author: 'John Doe' },
      { id: 14, title: 'Question 14', content: 'Content of question 14', author: 'John Doe' },
      { id: 15, title: 'Question 15', content: 'Content of question 15', author: 'John Doe' },
      { id: 16, title: 'Question 16', content: 'Content of question 16', author: 'John Doe' },
      { id: 17, title: 'Question 17', content: 'Content of question 17', author: 'John Doe' },
      { id: 18, title: 'Question 18', content: 'Content of question 18', author: 'John Doe' },
      { id: 19, title: 'Question 19', content: 'Content of question 19', author: 'John Doe' },
      { id: 20, title: 'Question 120', content: 'Content of question 120', author: 'John Doe' }
    ];
    return {questions};
  }

  genId(questions: Question[]): number {
    return questions.length > 0 ? Math.max(...questions.map(questions => questions.id)) + 1 : 11;
  }
}