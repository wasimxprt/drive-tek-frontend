import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

import { AdminGuard } from './admin.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UsersComponent } from './modules/users/users.component';
import { VehicleComponent } from './modules/vehicle/vehicle.component';
import { CourseComponent } from './modules/course/course.component';


const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
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
  }
];

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   {
//     path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]
//   },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
