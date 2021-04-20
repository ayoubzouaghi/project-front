import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { SharedModule } from '../shared/shared.module';
import { ListProductComponent } from './container/list-product/list-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductModalComponent,
    ListProductComponent
  ],
  exports: [
    ListProductComponent,
    ProductCardComponent,
    ProductModalComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
