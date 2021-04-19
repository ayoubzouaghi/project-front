import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: any
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    console.log('hi')
    this.authservice.getuser().then(res => {
      console.log('user', res)
      this.user = res.user
    })
  }

}