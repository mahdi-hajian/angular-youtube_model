import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFounPageComponent } from './not-foun-page/not-foun-page.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'notFound', component: NotFounPageComponent },
  { path: '**', redirectTo: 'notFound', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
