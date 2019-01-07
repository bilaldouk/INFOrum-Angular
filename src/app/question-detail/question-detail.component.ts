import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Question } from '../question';
import { QuestionService } from '../question.service';
import { Answer } from '../answer';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: Question;
  questions: Question[];
  answer: Answer[];
  
  /**
  * @param {QuestionService} questionService
  * @param {AnswerService} answerService
  * @param {Router} router
  * @param {ActivatedRoute} route
  */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private answerService: AnswerService
  ) { }

  ngOnInit(): void {
    this.getQuestion();
    this.getAnswers();
  }

  getQuestion() {
    let id = this.route.snapshot.paramMap.get('id');
    this.questionService.getQuestion(id).subscribe(
      (data) => {
        this.question = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAnswers() {
    this.answerService.getAnswers().subscribe(
      (data) => {
        this.answer = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

    confirmDelete(id: string) {
    if(confirm("You sure you want to delete this question"+ id + " ?")) {
      this.deleteQuestion(id);
    }
  }

  /** Delete the game from the database */
  deleteQuestion(id) {
    this.questionService.deleteQuestion(id).subscribe(
      (data) => {
        if (data.valid == true) {
          let i=0;
          for (i; i<this.questions.length; i++) {
            if (this.question[i].id == id) {
              this.questions.splice(i, 1);
            }
          }
          this.router.navigate(['/questions']);
        }
        else{
          console.log("error");
        }
      }
    );
  } 
  
  onSubmit() {
    let question = {
      'title': this.question.title,
      'content': this.question.content,
      'author': this.question.author
    };
    /* Checks datas */
    if (question.title !== undefined && question.author !== undefined && question.content !== undefined) {
        this.questionService.editQuestion(this.question.id, question).subscribe(
          (data) => {
            if (data.valid === true) {
              this.router.navigate(['/questions']);
            } else { document.getElementById('send-error').style.display = "block"; }
          }
        );
    } else { document.getElementById('form-error').style.display = "block"; }
  }
}