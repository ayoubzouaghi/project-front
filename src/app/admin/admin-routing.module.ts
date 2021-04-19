import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../shared/components/profile/profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { ContainerComponent } from './container/container.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

const routes: Routes = [

  {

    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'list',
        component: ListUsersComponent
      },
      {
        path: 'profile',
        component: AdminProfileComponent
      },
      {
        path: 'products',
        component: ListProductsComponent
      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
