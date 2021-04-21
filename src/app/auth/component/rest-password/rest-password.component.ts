import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.scss']
})
export class RestPasswordComponent implements OnInit {
  public resetForm: FormGroup = new FormGroup({});
  public token: any
  public check: any
  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,) { }

  ngOnInit() {

    this.createResetForm()
    this.token = this.activatedRoute.snapshot.queryParams.token;

  }
  createResetForm() {
    this.resetForm = this.fb.group({
      email: ['',],
      password: ['',],
      password_confirmation: ['',],

    });
  }

  showpassword() {
    this.check = !this.check;

    if (this.check == true) {
      (<HTMLInputElement>document.getElementById("pass")).type = "text";

    } else {
      (<HTMLInputElement>document.getElementById("pass")).type = "password";

    }
  }

  prepareRegisterInfo(): any {
    const formModel = this.resetForm.value;
    const data = {

      email: formModel.email as string,
      password: formModel.password as string,
      password_confirmation: formModel.password_confirmation as string,
      token: this.token,


    };
    return data;
  }


  resetPassword() {
    const data = this.prepareRegisterInfo()
    this.authService.resetPassword(data).subscribe(res => {
      this.router.navigate(['/auth/login']);

    })
  }
}
