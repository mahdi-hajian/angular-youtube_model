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
import { PipeOnePipe } from './Pipes/pipe-one.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { TwoWayAnimationComponent } from './Components/Animation/two-way-animation/two-way-animation.component';
import { MultiStateAnimationComponent } from './Components/Animation/multi-state-animation/multi-state-animation.component';
import { KeyframeAnimationComponent } from './Components/Animation/keyframe-animation/keyframe-animation.component';
import { ListAnimationComponent } from './Components/Animation/list-animation/list-animation.component';

@NgModule({
   declarations: [
      AppComponent,
      NotFounPageComponent,
      HomeComponent,
      AboutComponent,
      UserComponent,
      SingUpComponent,
      SingUpReactiveComponent,
      PipeOnePipe,
      FilterPipe,
      TwoWayAnimationComponent,
      MultiStateAnimationComponent,
      KeyframeAnimationComponent,
      ListAnimationComponent
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
