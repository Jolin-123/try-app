import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  // getDesignations(){
  //   return this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  // }

  getDesignations():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>("/api/ClientStrive/GetAllDesignation")
  }
}
