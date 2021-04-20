import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './componenet/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './componenet/user-profile/user-profile.component';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [
    DashboardComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ProductModule
  ]
})
export class UserModule { }
