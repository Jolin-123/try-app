import { CommonModule } from '@angular/common';
import { Component, resolveForwardRef } from '@angular/core';
import {Client} from '../../model/class/client';
import {FormsModule} from '@angular/forms'
import { OnInit, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { AppComponent } from '../../app.component';



@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule,AppComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'

})


export class ClientComponent implements OnInit {

  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  // adding function inside there, then it will work
  ngOnInit(): void {
    this.loadClient();
    this.onSaveClient();
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }

  onSaveClient(){
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("client creates success");
        this.clientObj = new Client();
      }else {
        alert(res.message)
      }
    })
  }
  
  onEdit(data: Client){
    this.clientObj = data;
  }


  onDelete(id: number){
    const isDelete = confirm("are you sure want to delete? ");
    console.log("inside the delete function! ")

    // if(isDelete){
      this.clientService.deleteClientById(id).subscribe((res:APIResponseModel)=>{
        if(res.result){
          alert("client Delete success");
          this.loadClient();
        }else {
          alert(res.message)
        }
      })
    // }
    
  }
}
