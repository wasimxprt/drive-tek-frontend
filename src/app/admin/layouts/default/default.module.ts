import { AngularMaterialModule } from '../../angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from '../../modules/posts/posts.component';
import { SharedModule } from '../../shared/shared.module';
import { VehicleComponent } from '../../modules/vehicle/vehicle.component';
import { BrandComponent } from '../../modules/brand/brand.component';


@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent,VehicleComponent, BrandComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class DefaultModule { }
