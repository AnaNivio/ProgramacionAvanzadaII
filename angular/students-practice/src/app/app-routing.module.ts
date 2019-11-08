import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { StudentModifyComponent } from './components/student-modify/student-modify.component';
import { CareerListComponent } from './components/career-list/career-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'add', component: StudentAddComponent},
  { path: 'list', component: StudentListComponent},
  { path: 'listCareer', component: CareerListComponent},
  { path: 'view/:id', component: StudentViewComponent},
  { path: 'modification/:id', component: StudentModifyComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SignInComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
