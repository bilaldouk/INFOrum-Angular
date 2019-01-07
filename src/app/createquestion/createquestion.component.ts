import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.css']
})
export class CreatequestionComponent implements OnInit {

  question: Question;
  answers: Answer[];

  /**
  * Construct the component
  *
  * @param {Router} router
  * @param {CategoryService} categoryService
  */
  constructor(private router: Router,
              private questionService: QuestionService,
              private answerService: AnswerService) { this.question = new Question(); }

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

  onSubmit() {
    if (this.question.title != undefined && this.question.content !== undefined && this.question.author !== undefined) {
      this.questionService.createQuestion(this.question).subscribe(
        (data) => {
          if (data.valid == true) {
            this.router.navigate(['/questions']);
          } else { document.getElementById('send-error').style.display = "block"; }
        }
      );
    } else { document.getElementById('form-error').style.display = "block"; }
  }
}
