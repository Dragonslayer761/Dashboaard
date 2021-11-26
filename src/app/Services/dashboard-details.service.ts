import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardDetailsService {

  constructor(private http: HttpClient) { }
  configUrl:string = "http://localhost:3000/db";
  getServerDetails(){
    return this.http.get<any>(this.configUrl);
  }
  addServerDetails(body:any){
    this.http.post<any>(this.configUrl,body).subscribe(data=>{
      next:(data:any)=>{
        console.log(data)
      }
      error:(error:any)=>{
        console.error(error)
      }
    })
  }
}
