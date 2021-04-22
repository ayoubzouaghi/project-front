import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  public photo: any
  @Output() editProduct = new EventEmitter
  @Output() delete = new EventEmitter

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    if (this.product) {
      this.productservice.ProductImage(this.product.id).subscribe(res => {
        this.photo = environment.baseImageProduct + res.image
        console.log('product card', this.photo)
      })
    }
  }
  openEditModal(product: any) {
    console.log(product)
    this.editProduct.emit(product)
  }
  openConfirmModal(data: any) {
    this.delete.emit(data)
  }
}
