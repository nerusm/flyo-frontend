import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  SERVER_URL: string = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }
  


  public upload(data) {
    let uploadURL = this.SERVER_URL+'/manage-shop/handleFileUpload';

    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {
      console.log("Event type: "+event.type);
      
      switch (event.type) {

        case HttpEventType.UploadProgress:
            console.log("Event type: UploadProgress");
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
            console.log("Event type: Response");
          return event.body;
        default:
            console.log("Event type: Default");
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }
  
}
