import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';



declare var M:any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  /* Darle el empleado al servidor para almacenar*/
  addEmployee(form: NgForm){
    if(form.value._id){
      this.employeeService.putEmployee(form.value)
      .subscribe(res=>{
       this.resetForm(form);
       M.toast({html:'Update succefull'});
       this.getEmployees();
      })
    } else {
      this.employeeService.postEMployee(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save succefull'})
        /*al momento de guardar lo inserta directo a la tabla*/
        this.getEmployees();
      });

    }
   
  }

  /* consula ala base de datos, trae empleado */
  getEmployees(){
    this.employeeService.getEmployees()
    .subscribe (res => {
      this.employeeService.employees = res as Employee[];
      console.log(res);
    })
    
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string){
    if (confirm('Are you sure yu want to delete')){
      this.employeeService.deleteEmployee(_id)
      .subscribe(res =>{
        this.getEmployees();
        M.toast({html: 'Delete successfully'});
      });
      
    }
  
  }

  resetForm(Form?: NgForm){
    if (Form){
      Form.reset();
      this.employeeService.selectedEmployee= new Employee();
    }

  }

}
