import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Product } from "../model/product";
import { ProductCheckboxItemWrapper } from "../model/product-checkbox-item-wrapper";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productsURL: string;

  constructor(private http: HttpClient ) {
    this._productsURL = "http://localhost:8080/manage-shop/products";
   }

   public findAll(): Observable<Product[]>{
     return this.http.get<Product[]> (this._productsURL);
   }
}
