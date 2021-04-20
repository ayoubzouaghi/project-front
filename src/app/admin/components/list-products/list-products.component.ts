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





  openModal(product: any) {

    this.update.emit(product)


  }

  openConfirmModal(product: any) {

    this.delete.emit(product)

  }
}
