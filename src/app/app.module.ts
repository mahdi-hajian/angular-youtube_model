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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StarComponent,
    OneComponenetComponent,
    TwoComponenetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountService,AddAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
