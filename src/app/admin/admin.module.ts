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


@NgModule({
  declarations: [LoginComponent, DashboardComponent, HomeComponent, RegisterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
})
export class AdminModule { }
