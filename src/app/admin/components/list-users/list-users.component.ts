import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { UserModalComponent } from 'src/app/shared/components/user-modal/user-modal.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  public users: any
  public user: any
  public selctedEntity: any
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();
  constructor(
    public authService: AuthService,
    public modalService: NgbModal,) { }

  ngOnInit(): void {
    this.init()

  }
  public init() {
    this.authService.getAllUsers().subscribe(res => {
      this.users = res.users
    })
    this.authService.getuser().then(res => {
      this.user = res.user
    })
  }


  openModal(user: any) {
    this.selctedEntity = user
    const modalRef = this.modalService.open(UserModalComponent);
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.update.subscribe((resp: any) => {
      if (this.selctedEntity) {
        this.authService.AdminUpdateUser(resp).then(((res: any) => {
          this.init()
          modalRef.close()
        }))

      }


      else {
        this.authService.sendInvitation(resp).then(res => {

        })
      }
    })

  }




  openConfirmModal(user: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.delete.subscribe((resp: any) => {
      this.authService.deleteUser(resp).subscribe(((res: any) => {
        this.init()
        modalRef.close()
      }))
    })

  }
}