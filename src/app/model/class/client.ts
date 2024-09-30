export class Client {
    clientId:          number;
    contactPersonName: string;
    companyName:       string;
    address:           string;
    city:              string;
    pincode:           string;
    state:             string;
    employeeStrength:  number;
    gstNo:             string;
    contactNo:         string;
    regNo:             string;

    constructor(){
        this.clientId = 0;
        this.employeeStrength=0;
        this.address='';
        this.city='';
        this.companyName='';
        this.contactNo='';

        this.pincode='';
        this.state='';
        this.gstNo='';
        this.regNo='';
        this.contactPersonName = '';
        
    }
}


export class ClientProjectDis {
    empName: string;
    empId: number;
    empCode: string;
    empEmailId: string;
    empDesignation: string;
    projectName: string;
    startDate: Date;
    expectedEndDate: Date;
    clientName: string;
    clientProjectId: number;

    constructor() {
        this.empName = '';
        this.empId = 0;
        this.empCode = '';
        this.empEmailId = '';
        this.empDesignation = '';
        this.projectName = '';//
        this.startDate = new Date(); // default to current date
        this.expectedEndDate = new Date(); // default to current date
        this.clientName = '';
        this.clientProjectId = 0;
    }
}



export class ClientProject {
    clientProjectId: number;
    projectName: string;
    startDate: Date;
    expectedEndDate: Date;
    contactPerson: string;
    contactPersonContactNo: string;
    contactPersonEmailId: string;
    totalEmpWorking: number;
    projectCost: number;
    projectDetails: string;
    clientId: number;
    leadByEmpId: number;
  
    constructor() {
      this.clientProjectId = 0;
      this.projectName = '';
      this.startDate = new Date();
      this.expectedEndDate = new Date();
      this.contactPerson = '';
      this.contactPersonContactNo = '';
      this.contactPersonEmailId = '';
      this.totalEmpWorking = 0;
      this.projectCost = 0;
      this.projectDetails = '';
      this.clientId = 0;
      this.leadByEmpId = 0;
    }
  }

  

// export class ClientProject {
//     empName: string;
//     empId: number;
//     empCode: string;
//     empEmailId: string;
//     empDesignation: string;
//     projectName: string;
//     startDate: Date;
//     expectedEndDate: Date;
//     clientName: string;
//     clientProjectId: number;

//     constructor() {
//         this.empName = '';
//         this.empId = 0;
//         this.empCode = '';
//         this.empEmailId = '';
//         this.empDesignation = '';
//         this.projectName = '';//
//         this.startDate = new Date(); // default to current date
//         this.expectedEndDate = new Date(); // default to current date
//         this.clientName = '';
//         this.clientProjectId = 0;
//     }
// }


// "clientProjectId": 0,
//   "projectName": "string",
// "startDate": "2024-09-30T03:32:41.003Z",
// "expectedEndDate": "2024-09-30T03:32:41.003Z",
//   "contactPerson": "string",
//   "contactPersonContactNo": "string",
//   "contactPersonEmailId": "string",
//   "totalEmpWorking": 0,
//   "projectCost": 0,
//  "projectDetails": "string",
//   "clientId": 0
//   "leadByEmpId": 0,