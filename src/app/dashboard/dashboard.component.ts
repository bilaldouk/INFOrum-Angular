import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { AnswerService } from '../answer.service';
import { Answer } from '../answer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questions: Question[] = [];
  answers: Answer[] = [];
 
  constructor(private questionService: QuestionService,
              private answerService: AnswerService) { }
 
  ngOnInit() {
    this.getQuestions();
    this.getAnswers();
  }
 
  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions.slice(1, 5));
  }

  getAnswers(): void {
    this.answerService.getAnswers()
      .subscribe(answers => this.answers = answers.slice(1, 5));
  }
}