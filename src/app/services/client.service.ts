import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client, ClientProject} from '../model/class/client'
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>("/api/ClientStrive/GetAllClients")
  }

  getAllEmployee(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>("/api/ClientStrive/GetAllEmployee")
  }

  //New API Call
  getAllClientProject(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>("/api/ClientStrive/GetAllClientProjects")
  }


  addUpdate(obj:Client): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>("/api/ClientStrive/AddUpdateClient", obj)
  }

  
  deleteClientById( id:number): Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(`/api/ClientStrive/DeleteClientByClientId?clientId=${id}`)
  }

// delete client project
deleteProjectByProjectId( id:number): Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(`/api/ClientStrive/DeleteProjectByProjectId?projectId=${id}`)
  }



  addClientProjectUpdate(obj:ClientProject): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>("/api/ClientStrive/AddUpdateClientProject", obj)
  }

  



}
