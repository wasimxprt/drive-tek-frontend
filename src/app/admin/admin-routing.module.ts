import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminGuard } from './admin.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UsersComponent } from './modules/users/users.component';
import { VehicleComponent } from './modules/vehicle/vehicle.component';
import { CourseComponent } from './modules/course/course.component';
import { LoginLayoutComponent } from './layouts/loginlayout/loginlayout/loginlayout.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';


const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    // canActivate: [AuthGuard],
    children: [{
      path: "dashboard",
      component: DashboardComponent,
    }, {
      path: "users",
      component: UsersComponent
    },
    {
      path: "vehicle",
      component: VehicleComponent
    },
    {
      path: "course",
      component: CourseComponent
    }]
  },
  {
    path: "admin",
    component: LoginLayoutComponent,
    children: [{
      path: "login",
      component: LoginComponent,
    }, {
      path: "register",
      component: RegisterComponent,
    }, {
      path: "forgot-password",
      component: ForgotPasswordComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
