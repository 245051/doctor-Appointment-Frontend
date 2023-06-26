import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserloginmainComponent } from './userloginmain/userloginmain.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookingComponent } from './booking/booking.component';
import { ReviewComponent } from './review/review.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AdminfunctionComponent } from './adminfunction/adminfunction.component';
import { UsernavComponent } from './usernav/usernav.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreviousappointmentComponent } from './previousappointment/previousappointment.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserloginComponent,
    UserSignupComponent,
    UserloginmainComponent,
    AppointmentComponent,
    BookingComponent,
    ReviewComponent,
    AdminloginComponent,
    AdministratorComponent,
    AdminfunctionComponent,
    UsernavComponent,
    AdminnavComponent,
    PreviousappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
