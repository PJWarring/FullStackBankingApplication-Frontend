import { Cors } from './services/interceptor/cors.interceptor';
import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';
import { OpenAccountsComponent } from './status-view-components/open-accounts/open-accounts.component';
import { DisabledAccountsComponent } from './status-view-components/disabled-accounts/disabled-accounts.component';
import { PendingAccountsComponent } from './status-view-components/pending-accounts/pending-accounts.component';
import { AllAccountsComponent } from './status-view-components/all-accounts/all-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    SignupComponent,
    NavComponent,
    SearchComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    NewAccountComponent,
    ViewProfilesComponent,
    OpenAccountsComponent,
    DisabledAccountsComponent,
    PendingAccountsComponent,
    AllAccountsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: Cors, multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
