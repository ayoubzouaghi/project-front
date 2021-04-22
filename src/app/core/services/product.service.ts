import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }


  addProduct(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'product/add', data)

  }
  UserProduct(): Observable<any> {
    return this.http.get(environment.apiUrl + 'product/user/products')
  }
  ProductImage(id: any): Observable<any> {
    return this.http.get(environment.apiUrl + 'product/image/' + id)
  }
  updateProductImage(image: any, data: any): Observable<any> {
    return this.http.put(environment.apiUrl + 'product/update/image/' + data.id, { image: image })
  }
  delete(data: any): Observable<any> {
    return this.http.delete(environment.apiUrl + 'product/delete/' + data.id)
  }
  updateProduct(data: any): Observable<any> {
    return this.http.put(environment.apiUrl + 'product/edit/' + data.id, data)
  }
  AllProduct(): Observable<any> {
    return this.http.get(environment.apiUrl + 'product/all')
  }
  userDeleteProduct(id: any): Observable<any> {
    return this.http.delete(environment.apiUrl + 'product/user/delete/' + id)
  }
}
