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
import { ProfileComponent } from './modules/profile/profile.component';
import { BrandComponent } from './modules/brand/brand.component';


const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,    
    children: [{
      path: "dashboard",
      component: DashboardComponent,
      canActivate: [AdminGuard]
    }, {
      path: "users",
      component: UsersComponent,
      canActivate: [AdminGuard]
    },
    {
      path: "vehicle",
      component: VehicleComponent,
      canActivate: [AdminGuard]
    },
    {
      path: "course",
      component: CourseComponent,
      canActivate: [AdminGuard]
    },{
      path: "profile",
      component: ProfileComponent,
      canActivate: [AdminGuard]
    },
    {
      path: "brand",
      component: BrandComponent,
      canActivate: [AdminGuard]
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
