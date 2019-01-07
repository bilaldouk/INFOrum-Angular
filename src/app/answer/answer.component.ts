import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service';
import { Router } from '@angular/router';
import { Answer } from '../answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  show: boolean = false;
  answers: Answer[];

  /**
  * @param {AnswerService} answerService
  * @param {Router} router
  */
  constructor(private answerService: AnswerService,
              private router: Router
  ) { }

  ngOnInit() {
    this.getAnswers();
  }

  getAnswers() {
    this.answerService.getAnswers().subscribe(
      (data) => {
        this.answers = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
