import { CommonModule } from '@angular/common';
import { Component, resolveForwardRef } from '@angular/core';
import {Client} from '../../model/class/client';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'
import { OnInit, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee} from '../../model/interface/role';
import { AppComponent } from '../../app.component';
import { FormGroup,Validators } from '@angular/forms';
import {ClientProject} from '../../model/class/client';


@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule, CommonModule,AppComponent, ReactiveFormsModule, ClientProjectComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})

// API CALL
export class ClientProjectComponent implements OnInit {

    projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    // EmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")
  });

  clientSrv= inject(ClientService);
  employeeList : Employee[]=[];
  clientList : Client[]=[];
 
  clientProjectList : ClientProject[]=[];           // interface
  projectObj: ClientProject = new ClientProject();  // class

  ngOnInit(): void {
    // *********!!!!! you have call the function here to execute them !! 
    this.getAllClient();
    this.getAllEmployee();
    this.getAllClientProject();

    this.onSavePorject();
    
  }

  getAllClient(){
    this.clientSrv.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }

  getAllEmployee(){
    this.clientSrv.getAllEmployee().subscribe((res:APIResponseModel)=>{
      this.employeeList = res.data;
    })
  }

//New API Call 
getAllClientProject(){
  this.clientSrv.getAllClientProject().subscribe((res:APIResponseModel)=>{
    this.clientProjectList = res.data;
  })
}


  onSavePorject(){
    const formValue = this.projectForm.value;
    // debugger;

    this.clientSrv.addClientProjectUpdate(formValue).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Project Created!  ");
      }else{
        alert(res.message);
      }
    })

    //automatically reload the page and displaying all project after submit the information 
    this.getAllClientProject();
  }


  //Adding more functions for client project
  onProjectEdit(data: ClientProject){
    this.projectObj = data;
  }


  onDelete(id: number){
    const isDelete = confirm("Are you sure want to delete? ");
    console.log("inside the delete function! ")

    // if(isDelete){
      this.clientSrv.deleteProjectByProjectId(id).subscribe((res:APIResponseModel)=>{
        if(res.result){
          alert("A client project delete successfully! ");
          this.getAllClientProject();
        }else {

          alert(res.message)
        }
      })
    // }
    
  }

}
