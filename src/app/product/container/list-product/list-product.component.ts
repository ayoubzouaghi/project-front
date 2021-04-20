import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { environment } from 'src/environments/environment';
import { ProductModalComponent } from '../../components/product-modal/product-modal.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  public products: any
  public photo: any
  public selctedEntity: any
  public role: any
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
    this.role = localStorage.getItem('role')
    if (this.role == -1) {
      this.auth.getuser().then(res => {
        this.productservice.UserProduct(res.user.id).subscribe(res => {
          this.products = res.product
        })
      })
    }
    else {
      this.productservice.AllProduct().subscribe(res => {
        this.products = res.product
      })

    }
  }

  openConfirmModal(product: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.data = product;
    modalRef.componentInstance.delete.subscribe((resp: any) => {
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
    modalRef.componentInstance.updateProductImage.subscribe((res: any) => {
      console.log('amaaaaann', res)
      this.updatephoto(res, this.selctedEntity)
    });
    modalRef.componentInstance.update.subscribe((resp: any) => {
      if (this.selctedEntity) {
        this.productservice.updateProduct(resp).subscribe(((res: any) => {
          this.init();
          modalRef.close()
        }))

      }
      else {
        this.productservice.addProduct(resp).subscribe(res => {
          this.init();
          modalRef.close()

        })
      }
    })
    this.init()
  }

  updatephoto(e: any, product: any) {
    if (e) {
      console.log('ena', e)
      this.productservice.updateProductImage(e, product).subscribe(res => {
        this.init()
      })
    }
  }
}
