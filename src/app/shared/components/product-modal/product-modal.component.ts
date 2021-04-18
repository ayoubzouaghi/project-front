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
  @Output() update = new EventEmitter;

  constructor(public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private productservice: ProductService) { }

  ngOnInit(): void {
    console.log('hani wselt', this.products)
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


    })
  }

  updateForm(formValue: any) {
    this.productForm.patchValue({
      'id': formValue.id,
      'name': formValue.name,
      'color': formValue.color,
      'price': formValue.price
    })
  }

  updateProduct() {
    this.update.emit(this.productForm.value)
  }
}
