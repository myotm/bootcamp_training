import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ThumbnailComponent } from './components/testing/thumbnail/thumbnail.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '',      component: LoginComponent },
  { path: 'thumbnail',      component: ThumbnailComponent }
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  public onThumbnailLoad(thumbnail: File, ) {
    
}

}

