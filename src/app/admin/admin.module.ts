import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ContainerComponent } from './components/container/container.component';
import { SharedModule } from '../shared/shared.module';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';


@NgModule({
  declarations: [

    ListUsersComponent,
    ContainerComponent,
    ListProductsComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
