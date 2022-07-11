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
import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'admin', component: AdminregisterComponent },
  {path: 'tracking', component: TrackingComponent },
  {path: 'about', component: AboutComponent },
  {path: 'home', component: HomeComponent },
  {path: 'orders', component: PricingComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'summary', component: OrderSummaryComponent},
  {path: '', redirectTo:"home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
