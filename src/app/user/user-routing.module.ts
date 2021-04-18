import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../shared/components/profile/profile.component';
import { DashboardComponent } from './componenet/dashboard/dashboard.component';
import { ListProductsComponent } from './componenet/list-products/list-products.component';
import { UserProfileComponent } from './componenet/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        component: ListProductsComponent
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
