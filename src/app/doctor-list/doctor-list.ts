import { ChangeDetectorRef, Component } from "@angular/core";
import { BaseListComponent } from "../base/base-list.component";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DoctorService } from "../services/doctor.service";
import { Router } from "@angular/router";
import { BaseService } from "../services/base.service";

@Component({
  selector: "app-doctor-list",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./doctor-list.html",
  styleUrl: "./doctor-list.css",
})
export class DoctorListComponent extends BaseListComponent {
   protected override pageUrl = '/doctors';

  constructor(private fb: FormBuilder, private doctorService: DoctorService, router: Router, cdr: ChangeDetectorRef) {
    super(router, cdr);
    this.form = this.buildForm();
  }

    protected override buildForm(): FormGroup {
    return this.fb.group({
      employeeId: [''],
      doctorName: [''],
      specialization: [''],
      experience: [''],
      contactNo: ['']
    });
  }

  protected override getService(): BaseService { return this.doctorService; }
}
