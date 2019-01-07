import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer';
import { AnswerService } from '../answer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {

  answer: Answer;

  /**
  * Construct the component
  *
  * @param {Router} router
  * @param {CategoryService} categoryService
  */
  constructor(private router: Router,
              private answerService: AnswerService) { this.answer = new Answer(); }

  ngOnInit() {
  }

  onSubmit() {
    if (this.answer.title !== undefined && this.answer.author !== undefined) {
        this.answerService.postAnswer(this.answer).subscribe(
          (data) => {
            if (data.valid == true) {
              this.router.navigate(['/questions']);
            } else { document.getElementById('send-error').style.display = "block"; }
          }
        );
    } else { document.getElementById('form-error').style.display = "block"; }
  }

}
