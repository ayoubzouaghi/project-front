import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  user = false
  admin = false
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.getuser().then(user => {
      this.user = user
    })
    if (localStorage.getItem('role') == '-1') {
      this.user = true
    }
    else if (localStorage.getItem('role') == '1') {
      this.admin = true
    }


  }
  logout() {
    this.authService.logout().subscribe(res => {
      console.log(res)
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.router.navigate(['auth/login']);
    }
    )
  }

}
