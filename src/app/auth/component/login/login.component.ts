import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "src/app/core/services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  prepareLoginInfo(): any {
    const formModel = this.loginForm.value;
    const data = {
      email: formModel.email as string,
      password: formModel.password as string
    };
    return data;
  }
  login() {


    if (this.loginForm.valid) {
      const data = this.prepareLoginInfo();
      this.authService.login(data).then(suc => {
        console.log(suc)
        localStorage.setItem("token", suc.token.access_token);
        localStorage.setItem("role", suc.role);
        if (localStorage.getItem('role') == '1') {
          this.router.navigate(['/admin/list']);
        }
        else {
          this.router.navigate(['/user/list']);
        }
      });

    }


  }


}

