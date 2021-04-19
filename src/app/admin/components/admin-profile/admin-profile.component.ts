import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
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
      this.authservice.updateProfilImage(user).subscribe(res => {

        this.initData()
      })
    }

  }
}
