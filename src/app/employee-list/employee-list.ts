import { ChangeDetectorRef, Component } from "@angular/core";
import { BaseListComponent } from "../base/base-list.component";
import { FormBuilder, FormGroup,ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { BaseService } from "../services/base.service";
import { EmployeeService } from "../services/employee.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-employee-list",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./employee-list.html",
  styleUrl: "./employee-list.css",
})
export class EmployeeListComponent extends BaseListComponent {
   protected override pageUrl = '/employees';

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, router: Router, cdr: ChangeDetectorRef) {
    super(router, cdr);
    this.form = this.buildForm();
  }

    protected override buildForm(): FormGroup {
    return this.fb.group({
      employeeId: [''],
      employeeName: [''],
      department: [''],
      salary: [''],
      status: ['']
    });
  }

  protected override getService(): BaseService { return this.employeeService; }
}
