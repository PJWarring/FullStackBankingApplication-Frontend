import { PendingAccountsComponent } from './status-view-components/pending-accounts/pending-accounts.component';
import { DisabledAccountsComponent } from './status-view-components/disabled-accounts/disabled-accounts.component';
import { OpenAccountsComponent } from './status-view-components/open-accounts/open-accounts.component';
import { AllAccountsComponent } from './status-view-components/all-accounts/all-accounts.component';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: 'open-accounts', component: OpenAccountsComponent},
    {path: 'disabled-accounts', component: DisabledAccountsComponent},
    {path: 'pending-accounts', component: PendingAccountsComponent},
    {path: '', component: AllAccountsComponent, pathMatch:'full'}
  ]},
  {path: 'profile', component: ProfileComponent},
  {path: 'view-profiles', component: ViewProfilesComponent},
  {path: '', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
