import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public check = false
  @Input() photo: any
  @Input() user: any;
  public isImageSaved: boolean = false;
  @Output() updateProfileImage = new EventEmitter();
  @Output() updateProfileEmitter = new EventEmitter();
  @Output() updatePasswordEmitter = new EventEmitter();


  public profilForm = new FormGroup({});
  public passwordForm = new FormGroup({});

  constructor(private authservice: AuthService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.authservice.getuser().then(res => {
      this.user = res.user
    })
    this.authservice.getProfilImage().then(res => {
      this.photo = environment.baseImage + res.image
    }).catch((error) => {
    });



    this.initForm()
    if (this.user) {
      this.updateProfilForm(this.user);
      this.updatePasswordForm(this.user)
    }
    this.init()
  }
  initForm() {
    this.profilForm = this.fb.group({
      'id': new FormControl(),
      'first_name': new FormControl(''),
      'last_name': new FormControl(''),
      'email': new FormControl({ value: '', disabled: true }),

    })
  }
  init() {
    this.passwordForm = this.fb.group({
      'id': new FormControl(),
      'password': new FormControl(''),
      'new_password': new FormControl(''),
      'c_new_password': new FormControl(''),
    })
  }
  updateProfilForm(formValue: any) {
    this.profilForm.patchValue({
      id: formValue.id,
      first_name: formValue.first_name,
      last_name: formValue.last_name,
      email: formValue.email as string,



    });
  }

  updatePasswordForm(formValue: any) {
    this.profilForm.patchValue({
      id: formValue.id,
      password: formValue.password,
      new_password: formValue.new_password,
      c_new_password: formValue.c_new_password,



    });
  }
  fileProfileEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          const imgBase64Path = e.target.result;
          this.photo = imgBase64Path;
          this.isImageSaved = true;
          this.updateProfileImage.emit(this.photo);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  prepareUserInfo(): any {
    const formModel = this.profilForm.value;
    const data = {
      id: formModel.id,
      first_name: formModel.first_name as string,
      last_name: formModel.last_name as string,
      email: formModel.email as string,

    };
    return data;
  }
  preparePassword() {
    const formModel = this.passwordForm.value;
    const data = {
      id: formModel.id,
      password: formModel.password as string,
      new_password: formModel.new_password as string,
      c_new_password: formModel.c_new_password as string,

    };
    return data;
  }
  updateProfil() {
    const data = this.prepareUserInfo();

    this.updateProfileEmitter.emit(data);
  }

  UpdatePassword() {
    const data = this.preparePassword();

    this.updatePasswordEmitter.emit(data)
  }
  showpassword() {
    this.check = !this.check;

    if (this.check == true) {
      (<HTMLInputElement>document.getElementById("pass")).type = "text";

    } else {
      (<HTMLInputElement>document.getElementById("pass")).type = "password";

    }
  }
}
