import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
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
}
