import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListProductsComponent } from './componenet/list-products/list-products.component';
import { DashboardComponent } from './componenet/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './componenet/user-profile/user-profile.component';


@NgModule({
  declarations: [
    ListProductsComponent,
    DashboardComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
