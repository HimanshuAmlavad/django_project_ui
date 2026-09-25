import { Component } from "@angular/core";
import { BaseComponent } from "../base/base.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Employee as EmployeeModel, EmployeeService } from "../services/employee.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-employee",
  imports: [ReactiveFormsModule],
  templateUrl: "./employee.html",
  styleUrl: "./employee.css",
})
export class EmployeeComponent extends BaseComponent {
  protected override listUrl = "/employees";

  override get title(): string {
    return this.isEditMode ? "Edit Employee" : "Add Employee";
  }

  readonly statusOptions = [
    "Active",
    "Inactive",
    "On Leave",
    "Resigned",
    "Retired",
    "Suspended",
  ];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    router: Router,
    route: ActivatedRoute,
  ) {
    super(router, route);
    this.form = this.buildForm();
  }

  protected override buildForm(): FormGroup {
    return this.fb.group({
      employeeId : ["",Validators.required],
      employeeName :["",Validators.required],
      department :["",Validators.required],
      salary : ["",Validators.required],
      status:[""]
    })
  }

  protected override populateForm(e: any): void {
    this.form.patchValue({
      employeeId : e.employeeId,
      employeeName : e.employeeName,
      department : e.department,
      salary : e.salary,
      status :e.status
    })
    
  }

  protected override getBody(): EmployeeModel {
      const v = this.form.value;
      return { id: this.entityId ?? 0, ...v  };
    }

  protected override getService(): EmployeeService {
    return this.employeeService;
  }
}
