import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  api = "http://localhost:3000/products"

  getAllProduct(): Observable<Product[]>{
   return this.http.get<Product[]>(this.api)
  }
   
  getProductById(id:number): Observable<Product>{
    return this.http.get<Product>(this.api + '/' + id)
}
addProduct(p: Product):Observable<Product>{
  return this.http.post<Product>(this.api,p)
}
deleteProduct(id:number) {
  return this.http.delete(this.api +'/' + id)
}
}
