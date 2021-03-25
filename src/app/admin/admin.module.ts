import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DefaultModule } from './layouts/default/default.module';
import { UsersComponent } from './modules/users/users.component';
import { VehicleComponent } from './modules/vehicle/vehicle.component';
import { CourseComponent } from './modules/course/course.component';
import { DataService } from './_services/data/data.service';


@NgModule({
  declarations: [LoginComponent, DashboardComponent, HomeComponent, RegisterComponent, UsersComponent, VehicleComponent, CourseComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    DefaultModule
  ],
  providers: [authInterceptorProviders,DataService],
})
export class AdminModule { }
