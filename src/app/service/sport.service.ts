import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Sport} from '../model/sport';
import { CheckBoxItem } from "../model/check-box-item";
import { Observable } from 'rxjs';
import { CheckItemWrapper } from '../model/check-item-wrapper';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  private sportsURL: string;
  private deleteURL: string;

  constructor(private http: HttpClient) {
    this.sportsURL = "http://localhost:8080/manage-shop/sports";
    this.deleteURL = "http://localhost:8080/manage-shop/deleteEntries";
   }

  public findAll(): Observable<Sport[]> {
    return this.http.get<Sport[]> (this.sportsURL);
  }

  public delete(checkedItemsWrapper: CheckItemWrapper) {
    return this.http.post<CheckBoxItem> (this.deleteURL,checkedItemsWrapper);
  }

  public save(sport: Sport){
    console.log("In service sport");
    
    return this.http.post<Sport> (this.sportsURL,sport);
  }
}
