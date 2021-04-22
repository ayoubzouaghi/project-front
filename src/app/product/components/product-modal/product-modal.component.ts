import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  public productForm = new FormGroup({});
  @Input() products: any
  @Output() update = new EventEmitter
  @Output() updateProductImage = new EventEmitter
  public photo: any
  public isImageSaved: boolean = false

  constructor(public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private productservice: ProductService) { }

  ngOnInit(): void {
    this.initData()
    if (this.products != null) {
      this.updateForm(this.products)
    }
  }

  initData() {
    this.productForm = this.formBuilder.group({
      'id': new FormControl(''),
      'name': new FormControl(''),
      'color': new FormControl(''),
      'price': new FormControl(''),
      'image': new FormControl(''),


    })
  }

  updateForm(formValue: any) {
    this.productForm.patchValue({
      'id': formValue.id,
      'name': formValue.name,
      'color': formValue.color,
      'price': formValue.price,
      'image': formValue.image,

    })
  }

  updateProduct() {
    this.update.emit(this.productForm.value);
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
          this.updateProductImage.emit(this.photo);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

}
