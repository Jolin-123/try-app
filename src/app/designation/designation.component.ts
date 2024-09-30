import { Component,inject,OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { ResourceLoader } from '@angular/compiler';
import { APIResponseModel, IDesignation } from '../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})

export class DesignationComponent {
  
  designationList: IDesignation [] =[];
  isLoader: boolean = true;
  masterService = inject(MasterService);

  ngOnInit(): void{
    this.masterService.getDesignations().subscribe((result:APIResponseModel)=>{
      this.designationList = result.data;
      this.isLoader = false;
    }, ERROR=>{
      alert("API error/ network Down")
      this.isLoader = false;
    })
  }

}
