import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { AuthGuard } from './services/auth/auth-guard.service';
import { LogoutComponent } from './components/logout/logout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  { path: 'list', component: ListComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '/list', pathMatch: 'full', canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
