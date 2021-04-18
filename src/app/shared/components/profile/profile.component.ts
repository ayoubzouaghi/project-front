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
  public isImageSaved: boolean = false;
  @Output() updateProfileImage = new EventEmitter();
  @Output() update = new EventEmitter();

  @Input() photo: any
  @Input() user: any;
  public profilForm = new FormGroup({});
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
      console.log(this.photo)

    }).catch((error) => {
    });
    this.initForm()
    if (this.user) {
      this.updateProfilForm(this.user);
    }
  }
  initForm() {
    this.profilForm = this.fb.group({
      'id': new FormControl(),
      'first_name': new FormControl(''),
      'last_name': new FormControl(''),
      'email': new FormControl({ value: '', disabled: true }),
    })

  }
  updateProfilForm(formValue: any) {
    this.profilForm.patchValue({
      id: formValue.id,
      first_name: formValue.first_name,
      last_name: formValue.last_name,


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

    };
    return data;
  }
  updateProfil() {
    const data = this.prepareUserInfo();

    this.update.emit(data);
  }
}
