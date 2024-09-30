import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})


export class RolesComponent implements OnInit {

  // constructor (private http: HttpClient){
    
  // }

  roleList: IRole [] = [];
  //any can be any data type

  http = inject(HttpClient);


ngOnInit():void{
  // alert("Hi")
  this.getAllRoles()
  this.fetchDetails()
}

getAllRoles() {
    this.http.get<APIResponseModel>('/api/ClientStrive/GetAllRoles').subscribe((res:APIResponseModel) => {
      console.log(res);
      this.roleList = res.data || res; // Assign the data to roleList
    });
    
}

//  getAllRoles() {
//   // Fetch the roles from API
//   // this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:any)=>{
//   //     this.roleList = res.data || res; // Assign the data to roleList
//   //     console.log(res);
//   //   });

//     this.http.get('/api/ClientStrive/GetAllRoles').subscribe((res:any) => {
//       console.log(res);
//       this.roleList = res.data || res; // Assign the data to roleList
//     });
    
// }

public fetchDetails() {
  this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((resp:any)=>{
      console.log(resp);

    }
  )
}

// getAllRoles(){
//   this.http.get("http://localhost:3000/data").subscribe((res:any) =>{
//     this.roleList = res.data;
//   })

}











// export class RolesComponent {

  //string, number, boolean,date, object, array, null, undefined
  // firstName: string = "Angular Tutorial";
  // angularVersion = "Version-18";

  // version:number = 18;
  // isActive: boolean=false;

  // currentDate: Date = new Date();
  // inputType: string = "button";
  // selectedState: string = "";

  // // function name
  // showWelcomeAlert(){
  //   alert("Welcom to Angular 18")
  // }

  // showMessage(message: string){
  //   alert(message)
  // }

// }
