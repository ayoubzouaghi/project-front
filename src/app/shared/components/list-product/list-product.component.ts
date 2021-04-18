import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  public products: any

  @Input() user: any
  @Input() product: any
  constructor(private auth: AuthService, private productservice: ProductService) { }
  ngOnInit(): void {
    /*  this.init()
   }
   init() {
     this.auth.getuser().then(res => {
       this.productservice.UserProduct(res.user.id).subscribe(res => {
         this.products = res.product
       })
 
     }) */
  }
}
