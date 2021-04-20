import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  public products: any
  public selctedEntity: any
  @Input() user: any
  @Input() product: any
  @Output() delete = new EventEmitter;
  @Output() update = new EventEmitter
  constructor(private auth: AuthService,
    private productservice: ProductService,
    public modalService: NgbModal,) { }
  ngOnInit(): void {
    this.init()
  }
  init() {
    this.auth.getuser().then(res => {
      this.productservice.UserProduct(res.user.id).subscribe(res => {
        this.products = res.product
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
      else {
        this.productservice.addProduct(resp).subscribe(res => {
          this.init()
          modalRef.close()

        })
      }
    })

  }
}
