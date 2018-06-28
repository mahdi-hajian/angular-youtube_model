import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StarComponent } from './star/star.component';
import { OneComponenetComponent } from './Servics-Component/one-componenet/one-componenet.component';
import { TwoComponenetComponent } from './Servics-Component/two-componenet/two-componenet.component';
import { AccountService } from './Services/account/account.service';
import { AddAccountService } from './Services/add-account/add-account.service';
import { AppRoutingModule } from './/app-routing.module';
import { AdminPanelComponent } from './AdminPanel/AdminPanel.component';
import { LogInService } from './Services/Guard/logIn.service';
import { AuthGuardService } from "./Services/Guard/AuthGuardService";
import { UserComponent } from './AdminPanel/User/User.component';
import { EditUserComponent } from './AdminPanel/editUser/editUser.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      StarComponent,
      OneComponenetComponent,
      TwoComponenetComponent,
      AdminPanelComponent,
      UserComponent,
      EditUserComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
      AccountService,
      AddAccountService,
      LogInService,
      AuthGuardService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
