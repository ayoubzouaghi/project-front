import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ContainerComponent } from './container/container.component';
import { SharedModule } from '../shared/shared.module';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [

    ListUsersComponent,
    ContainerComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ProductModule

  ]
})
export class AdminModule { }
