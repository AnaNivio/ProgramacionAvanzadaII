import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    PaginationComponent,
    NavBarComponent,
    LogoutComponent,
    SignUpComponent,
    ListItemComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
