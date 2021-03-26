import { AngularMaterialModule } from '../../../angular-material.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './loginlayout.component';
import { LoginComponent } from 'src/app/admin/modules/login/login.component';
import { RegisterComponent } from 'src/app/admin/modules/register/register.component';


@NgModule({
  declarations: [LoginLayoutComponent, LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginlayoutModule { }
