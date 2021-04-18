import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container/container.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ConfirmForgetPasswordComponent } from './component/confirm-forget-password/confirm-forget-password.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ContainerComponent,
    ForgetPasswordComponent,
    ConfirmForgetPasswordComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:
    [
      NgbActiveModal
    ]
})
export class AuthModule { }
