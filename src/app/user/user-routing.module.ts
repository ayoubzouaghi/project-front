import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from '../product/container/list-product/list-product.component';
import { DashboardComponent } from './componenet/dashboard/dashboard.component';
import { UserProfileComponent } from './componenet/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        component: ListProductComponent
      },
      {
        path: 'profil',
        component: UserProfileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
