import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswerComponent } from './answer/answer.component';
import { CreatequestionComponent } from './createquestion/createquestion.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';

import { AppRoutingModule } from './app-routing.module';

import { QuestionService } from './question.service';
import { AnswerService } from './answer.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionDetailComponent,
    DashboardComponent,
    AnswerComponent,
    CreatequestionComponent,
    CreateAnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    QuestionService,
    AnswerService,
    InMemoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
