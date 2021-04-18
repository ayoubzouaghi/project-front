import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { ListProductComponent } from './components/list-product/list-product.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    NavbarComponent,
    ProfileComponent,
    UserModalComponent,
    ConfirmModalComponent,
    ProductModalComponent,
    ListProductComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule

  ],
  exports: [
    ProductCardComponent,
    NavbarComponent,
    ProfileComponent,
    UserModalComponent,
    ProductModalComponent,
    ListProductComponent
  ]
})
export class SharedModule { }
