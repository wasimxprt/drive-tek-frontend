import { AngularMaterialModule } from '../../angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { VisitsChartComponent } from '../../modules/dashboard/visits-chart/visits-chart.component';
import { PerformanceChartComponent } from '../../modules/dashboard/performance-chart/performance-chart.component';
import { RevenueChartComponent } from '../../modules/dashboard/revenue-chart/revenue-chart.component';
import { DailyLineChartComponent } from '../../modules/dashboard/daily-line-chart/daily-line-chart.component';
import { ServerChartComponent } from '../../modules/dashboard/server-chart/server-chart.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from '../../modules/posts/posts.component';
import { SharedModule } from '../../shared/shared.module';
import { VehicleComponent } from '../../modules/vehicle/vehicle.component';
import { BrandComponent } from '../../modules/brand/brand.component';
import { AddBrandComponent } from '../../modules/brand/add-brand/add-brand.component';
import { EditBrandComponent } from '../../modules/brand/edit-brand/edit-brand.component';
import { ConfirmdialogComponent } from '../../shared/components/confirmdialog/confirmdialog.component';
import { SpinnerOverlayComponent } from '../../shared/components/spinner-overlay/spinner-overlay.component';



@NgModule({
<<<<<<< HEAD
  declarations: [DefaultComponent, DashboardComponent, VisitsChartComponent, PerformanceChartComponent, RevenueChartComponent, DailyLineChartComponent, ServerChartComponent, PostsComponent, VehicleComponent, BrandComponent, AddBrandComponent, EditBrandComponent, ConfirmdialogComponent, SpinnerOverlayComponent],
=======
  declarations: [DefaultComponent, DashboardComponent, VisitsChartComponent, PerformanceChartComponent, RevenueChartComponent, ServerChartComponent, PostsComponent, VehicleComponent, BrandComponent, AddBrandComponent, EditBrandComponent, ConfirmdialogComponent, SpinnerOverlayComponent],
>>>>>>> 1e7b80afdb99bc68be7d7272657dd2f6557011d3
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    DefaultComponent
  ]
})
export class DefaultModule { }
