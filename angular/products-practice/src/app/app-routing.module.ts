import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//components
import { LoginComponent } from './user/components/login/login.component';
import { ListComponentComponent } from './product/components/list-component/list-component.component';
import { SignUpComponent } from './user/components/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth-guard/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'list', component: ListComponentComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '/list', pathMatch: 'full', canActivate: [AuthGuard] }
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
