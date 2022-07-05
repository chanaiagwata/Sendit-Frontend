import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicesComponent } from './components/services/services.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HomeComponent } from './components/home/home.component'; 
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent },
  {path: 'login', component: LoginComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'tracking', component: TrackingComponent },
  {path: 'about', component: AboutComponent },
  {path: 'home', component: HomeComponent },
  {path: 'pricing', component: PricingComponent },
  {path: '', redirectTo:"home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
