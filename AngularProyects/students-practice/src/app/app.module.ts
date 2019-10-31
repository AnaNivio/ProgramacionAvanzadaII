import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { StudentModifyComponent } from './components/student-modify/student-modify.component';
import { CareerListComponent } from './components/career-list/career-list.component';
import { LoginComponent } from './components/login/login.component';
import { NavListComponent } from './shared/nav-list/nav-list.component';
import { NavListService } from './services/nav-list-service/nav-list.service';
import { StudentServiceObservableComponent } from './services/student-service-observable/student-service-observable.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentViewComponent,
    StudentModifyComponent,
    CareerListComponent,
    LoginComponent,
    NavListComponent,
    StudentServiceObservableComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    NavListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
