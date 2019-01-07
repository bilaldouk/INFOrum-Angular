import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { AnswerComponent } from './answer/answer.component';
import { CreatequestionComponent } from './createquestion/createquestion.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'questions', component: QuestionsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'question/:id', component: QuestionDetailComponent },
  { path: 'edit/:id', component: QuestionsComponent },
  { path: 'answers', component: AnswerComponent },
  { path: 'new', component: CreatequestionComponent },
  { path: 'new/answer', component: CreateAnswerComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
