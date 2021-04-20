import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm = new FormGroup({})
  public token: any
  constructor(private auth: AuthService
    , private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createregisterForm();


    this.token = this.activatedRoute.snapshot.queryParams.token;
    this.auth.gettokenstate(this.token).subscribe((response: any) => {
      /*  if (response.success === 1) {
         
       }
       else {
         this.router.navigate(['/auth/login']);
 
       } */
    });



  }

  createregisterForm() {
    this.registerForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      password: ['',],
    });
  }
  prepareLoginInfo(): any {
    const formModel = this.registerForm.value;
    const data = {
      first_name: formModel.first_name as string,
      last_name: formModel.last_name as string,
      password: formModel.password as string,
      token: this.token as string,

    };
    return data;
  }
  register() {
    if (this.registerForm.valid) {
      const data = this.prepareLoginInfo();

      this.auth.AddUser(data).subscribe(res => {
        this.router.navigate(['/auth/login']);

      })
    }
  }
}
