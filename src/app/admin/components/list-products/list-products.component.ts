import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { ProductModalComponent } from 'src/app/shared/components/product-modal/product-modal.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  public product: any
  public selctedEntity: any
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor(private productservice: ProductService,
    private auth: AuthService,
    public modalService: NgbModal,) { }

  ngOnInit(): void {
    this.init()
  }
  init() {
    this.auth.getuser().then(res => {
      this.productservice.UserProduct(res.user.id).subscribe(res => {
        this.product = res.product
      })

    })
  }
  openConfirmModal(product: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.data = product;
    modalRef.componentInstance.delete.subscribe((resp: any) => {
      console.log('list-productts', resp)
      this.productservice.delete(resp).subscribe(((res: any) => {
        this.init()
        modalRef.close()
      }))
    })

  }

  openModal(product: any) {
    console.log('product', product)
    this.selctedEntity = product
    const modalRef = this.modalService.open(ProductModalComponent);
    modalRef.componentInstance.products = product;
    modalRef.componentInstance.update.subscribe((resp: any) => {
      if (this.selctedEntity) {
        this.productservice.updateProduct(resp).subscribe(((res: any) => {
          this.init()
          modalRef.close()
        }))
      }
      /* else {
        this.productservice.addProduct(resp).subscribe(res => {

        })
      } */
    })

  }
}
