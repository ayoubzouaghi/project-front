import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  public products: any;
  constructor(private productService: ProductService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getuser().then(res => {
      this.productService.UserProduct(res.user.id).subscribe((res => {
        this.products = res.product;
        this.productService.ProductImage(this.products.id).subscribe((res => {
        }))
      }))

    })

  }


}
