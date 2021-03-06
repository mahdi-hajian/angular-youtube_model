import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFounPageComponent } from './not-foun-page/not-foun-page.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { UserComponent } from './Components/user/user.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';
import { SingUpReactiveComponent } from './Components/sing-up-reactive/sing-up-reactive.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'singUp', component: SingUpComponent},
  { path: 'singUpReactive', component: SingUpReactiveComponent},
  { path: 'user/:id', component: UserComponent},
  { path: 'notFound', component: NotFounPageComponent },
  { path: '**', redirectTo: 'notFound', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
