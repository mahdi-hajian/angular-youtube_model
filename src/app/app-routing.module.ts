import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './star/star.component';
import { OneComponenetComponent } from './Servics-Component/one-componenet/one-componenet.component';
import { AdminPanelComponent } from './AdminPanel/AdminPanel.component';
import { AuthGuardService } from "./Services/Guard/AuthGuardService";
import { UserComponent } from './AdminPanel/User/User.component';

const routes: Routes = [
  { path: '',redirectTo:'about',pathMatch:"full" },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'star', component: StarComponent },
  { path: 'user/:id/:name', component: UserComponent },
  { path: 'star', component: StarComponent },
  { path: 'one', component:  OneComponenetComponent},
  { path: 'adminPanel', canActivate:[AuthGuardService], component:  AdminPanelComponent},
  { path: '**', redirectTo:'about',pathMatch:"full" }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}