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
    this.initData()
  }
  initData() {
    this.authservice.getuser().then(res => {
      this.user = res.user

    }).catch((error) => {
    });
  }
  updateProfileEvent(user: any) {
    if (user) {
      this.authservice.updateUser(user).then(res => {

        this.initData()
      })
    }

  }
  UpdatePassword(e: any) {
    if (e) {
      this.authservice.changePassword(e).subscribe(res => {
        this.initData()
      })
    }

  }
  updateProfileImage(e: any) {
    if (e) {
      this.authservice.updateProfilImage(e).subscribe(res => {
        this.initData()
      })
    }
  }
}
