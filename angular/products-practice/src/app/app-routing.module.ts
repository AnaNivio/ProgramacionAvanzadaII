import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//components
import { LoginComponent } from './user/components/login/login.component';
import { SignUpComponent } from './user/components/sign-up/sign-up.component';
import { ListComponentComponent } from './product/components/list-component/list-component.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'list', component: ListComponentComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];
// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
