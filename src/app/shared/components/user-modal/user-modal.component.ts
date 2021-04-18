import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  submitted = false;

  @Input() user: any
  @Output() update = new EventEmitter
  constructor(public authservice: AuthService,
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,

  ) {

  }


  ngOnInit() {
    this.initData()
    if (this.user != null) {
      this.updateForm(this.user)
    }
  }

  initData() {
    this.userForm = this.formBuilder.group({
      'id': new FormControl(''),
      'email': new FormControl(''),


    })
  }
  updateForm(formValue: any) {
    this.userForm.patchValue({
      'id': formValue.id,
      'email': formValue.email,

    })
  }
  updateUser() {
    this.update.emit(this.userForm.value)
  }


}
