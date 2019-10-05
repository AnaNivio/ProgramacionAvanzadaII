import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  { path: 'add', component: StudentAddComponent},
  { path: 'list', component: StudentListComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
