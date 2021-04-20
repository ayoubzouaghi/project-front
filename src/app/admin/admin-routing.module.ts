import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../shared/components/profile/profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { ContainerComponent } from './container/container.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListProductComponent } from '../product/container/list-product/list-product.component';

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
        component: ListProductComponent
      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
