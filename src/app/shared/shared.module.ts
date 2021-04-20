import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NavbarComponent,
    ProfileComponent,
    UserModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,

  ],
  exports: [
    NavbarComponent,
    ProfileComponent,
    UserModalComponent,
    ConfirmModalComponent
  ]
})
export class SharedModule { }
