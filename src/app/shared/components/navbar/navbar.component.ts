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
  public button: any
  public wrapper: any

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.button = document.querySelector('#sidebar-toggle');
    this.wrapper = document.querySelector('#wrapper');

    this.button.addEventListener('click', (e: any) => {
      e.preventDefault();
      this.wrapper.classList.toggle('toggled');
    });


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
