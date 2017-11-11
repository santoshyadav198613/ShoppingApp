import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee/employee.service';
import { Employee } from '../service/employee/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name = 'test';
  newName: string;
  isVisible: boolean;
  employees: Employee[];
  emp = new Employee();
  constructor(private _empService: EmployeeService) { }

  ngOnInit() {
    this.loadData();
  //  this.employees = this._empService.getEmployees();
  }
  loadData(){
    this._empService.getEmployees().subscribe((data) => this.employees = data);
  }

  updateName(name: string) {
    this.name = name;
    this.isVisible = !this.isVisible;
  }

  save(){
    this._empService.addEmployee(this.emp).subscribe((data) => 
    {
      console.log(data);this.loadData();
      this.emp = new Employee();
    });
    
  }

}
