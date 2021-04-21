import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmForgetPasswordComponent } from '../confirm-forget-password/confirm-forget-password.component';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  public forgetForm: FormGroup = new FormGroup({});

  constructor(public authService: AuthService,
    private fb: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit() {

    this.createForgetForm()
  }
  createForgetForm() {
    this.forgetForm = this.fb.group({
      email: ['',]

    });
  }
  prepareLoginInfo(): any {
    const formModel = this.forgetForm.value;
    const data = {
      email: formModel.email as string,
    };
    return data;
  }
  forgetPassword() {
    const data = this.prepareLoginInfo();
    console.log(data)
    this.authService.forgotPassword(data).subscribe((res: any) => {

    })
  }

}