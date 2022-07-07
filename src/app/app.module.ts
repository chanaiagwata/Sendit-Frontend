import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { MapComponent } from './components/map/map.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


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
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
