import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatInputModule, MatButtonModule, MatFormFieldModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorService, LocationService, HttpService, AuthService, UserApiService } from './services';


const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '',      component: LoginComponent },
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [ ValidatorService, LocationService, AuthService, HttpService, UserApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
    

}

