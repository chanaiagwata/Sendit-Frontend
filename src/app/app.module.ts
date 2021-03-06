import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { ServicesComponent } from './components/services/services.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MapComponent } from './components/map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
// import { AgmCoreModule } from '@agm/core';

import { OrderSummaryComponent } from './components/order-summary/order-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    TrackingComponent,
    ServicesComponent,
    PricingComponent,
    MapComponent,
    ProfileComponent,
    AdminregisterComponent,
    CalculatorComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
