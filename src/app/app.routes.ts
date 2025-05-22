import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayouttComponent } from './layouts/user-layoutt/user-layoutt.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ExamOperationComponent } from './components/exam-operation/exam-operation.component';
import { adminGuard } from './core/guards/admin/admin.guard';
import { UsersResultsComponent } from './components/users-results/users-results.component';
import { ViewExamsComponent } from './components/view-exams/view-exams.component';
import { AddExamComponent } from './components/add-exam/add-exam.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { loginGuard } from './core/guards/login/login.guard';
import { StudentdashboardComponent } from './components/studentdashboard/studentdashboard.component';
import { ShowExamComponent } from './components/show-exam/show-exam.component';
import { EditExamComponent } from './components/edit-exam/edit-exam.component';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { AvailableExamsComponent } from './components/available-exams/available-exams.component';
import { TakeExamComponent } from './components/take-exam/take-exam.component';
import { ShowResultComponent } from './components/show-result/show-result.component';
import { AllResultsForUserComponent } from './components/all-results-for-user/all-results-for-user.component';
import { AdminShowResultsComponent } from './components/admin-show-results/admin-show-results.component';

export const routes: Routes = [
  {path : '', component : BlankLayoutComponent , canActivate : [loginGuard] ,children : [
    {path : '' , redirectTo : 'home' ,pathMatch :'full'},
    {path : 'home', component : HomeComponent},
    {path : 'login', component :LoginComponent},
     {path : 'register', component : RegisterComponent},

  ]},

  {path : '' ,component : AdminLayoutComponent, canActivate : [adminGuard] ,children : [
 {path : '' , redirectTo : 'exams' ,pathMatch :'full'},

    {path:'exams' , component :  ExamOperationComponent},
     {path:'results' , component :  UsersResultsComponent},
     {path:'viewExams' , component :  ViewExamsComponent},
     {path:'AddExam' , component :  AddExamComponent},
    {path:'AddQuestions/:id' , component :  AddQuestionsComponent},
      {path:'exam-details/:id' , component : ShowExamComponent},
      {path:'edit-exam/:id' , component : EditExamComponent},
      {path:'edit-question/:id' , component : EditQuestionComponent},
      {path : 'AllResultsForAdmin/:id' , component :AdminShowResultsComponent}


  ]},

  {path : '' , component : UserLayouttComponent,children : [
         {path:'studentDashboard' , component : StudentdashboardComponent},
         {path : 'AllExams' ,component : AvailableExamsComponent},
         {path : 'takeExam/:id' ,component : TakeExamComponent},
         {path : 'showResult/:id' , component :ShowResultComponent},
         {path : 'AllResultsForStudent/:id' , component :AllResultsForUserComponent}


  ]}



];
ShowResultComponent
