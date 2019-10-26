import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import {Supplier} from '../model/supplier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private suppliersURL: string; 
  
  constructor(private http: HttpClient) {
      this.suppliersURL = 'http://localhost:8080/manage-shop/suppliers';

   }

   /**
    * findAll
 : Ob   */
   public findAll(): Observable<Supplier[]> {
     return this.http.get<Supplier[]> (this.suppliersURL);
   }

   /**
    * save
supplier: Supplier    */
   public save(supplier: Supplier) {
     return this.http.post<Supplier>(this.suppliersURL, supplier);
   }
}
