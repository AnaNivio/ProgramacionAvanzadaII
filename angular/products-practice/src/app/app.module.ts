import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/components/login/login.component';
import { ListComponentComponent } from './product/components/list-component/list-component.component';
import { SignUpComponent } from './user/components/sign-up/sign-up.component';
import { AuthInterceptorService } from './auth/auth-interceptor/auth-interceptor.service';
import { ListItemComponent } from './product/components/list-item/list-item.component';
import { PaginatorComponent } from './shared/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ListComponentComponent,
    ListItemComponent,
    PaginatorComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
