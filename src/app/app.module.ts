import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from './_alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SaleHomeComponent } from './sale-home/sale-home.component';
import { ReportHomeComponent } from './report-home/report-home.component';
// import { combineLatest } from 'rxjs';
import { FileSelectDirective } from "ng2-file-upload";


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductAdminComponent,
    DashboardHomeComponent,
    SaleHomeComponent,
    ReportHomeComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AlertModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : 'dashboard-home', component:DashboardHomeComponent},
      {path : 'product-admin', component:ProductAdminComponent},
      {path : 'sale-home', component : SaleHomeComponent},
      {path : 'reports-home', component : ReportHomeComponent},
    ],{
      onSameUrlNavigation: "reload"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
