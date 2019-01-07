import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from '../question';
import { QuestionService } from '../question.service';
import { Answer } from '../answer';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  answer: Answer;
  
  constructor(private questionService: QuestionService,
              private answerService: AnswerService,
              private router: Router) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }


}
