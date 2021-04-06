import { AngularMaterialModule } from '../../angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from '../../modules/posts/posts.component';
import { SharedModule } from '../../shared/shared.module';
import { VehicleComponent } from '../../modules/vehicle/vehicle.component';
import { BrandComponent } from '../../modules/brand/brand.component';
import { AddBrandComponent } from '../../modules/brand/add-brand/add-brand.component';
import { EditBrandComponent } from '../../modules/brand/edit-brand/edit-brand.component';
import { ConfirmdialogComponent } from '../../shared/components/confirmdialog/confirmdialog.component';



@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent,VehicleComponent, BrandComponent, AddBrandComponent, EditBrandComponent, ConfirmdialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class DefaultModule { }
