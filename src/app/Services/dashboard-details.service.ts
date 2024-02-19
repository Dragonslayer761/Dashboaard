import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import databaseData from './db'
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardDetailsService {
  dbVar = databaseData;
  constructor(private http: HttpClient) { }
  configUrl:string = "http://localhost:3000/db";
  getServerDetails(){
    return of(databaseData);
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
