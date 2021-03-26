
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DefaultModule } from './layouts/default/default.module';
import { UsersComponent } from './modules/users/users.component';
import { VehicleComponent } from './modules/vehicle/vehicle.component';
import { CourseComponent } from './modules/course/course.component';
import { DataService } from './_services/data/data.service';
import { LoginlayoutModule } from './layouts/loginlayout/loginlayout/loginlayout.module';


@NgModule({
  declarations: [UsersComponent, VehicleComponent, CourseComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DefaultModule,
    LoginlayoutModule
  ],
  providers: [authInterceptorProviders, DataService]
})
export class AdminModule { }
