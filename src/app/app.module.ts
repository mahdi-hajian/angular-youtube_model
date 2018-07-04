import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFounPageComponent } from './not-foun-page/not-foun-page.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { UserService } from './Services/User/user.service';
import { UserComponent } from './Components/user/user.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';
import { SingUpReactiveComponent } from './Components/sing-up-reactive/sing-up-reactive.component';

@NgModule({
   declarations: [
      AppComponent,
      NotFounPageComponent,
      HomeComponent,
      AboutComponent,
      UserComponent,
      SingUpComponent,
      SingUpReactiveComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [UserService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
