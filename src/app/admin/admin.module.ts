
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DefaultModule } from './layouts/default/default.module';
import { DataService } from './_services/data/data.service';
import { LoginlayoutModule } from './layouts/loginlayout/loginlayout/loginlayout.module';

import { BrandService } from './_services/brand/brand.service';
import { SpinnerService } from './_services/spinner/spinner.service';
import { SpinnerInterceptor } from './_helpers/spinner.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DefaultModule,
    LoginlayoutModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true,
  }, authInterceptorProviders, DataService, BrandService, SpinnerService]
})
export class AdminModule { }
