import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { BaseComponent } from "../base/base.component";
import { ActivatedRoute, Router } from "@angular/router";
import { Doctor, DoctorService } from "../services/doctor.service";

@Component({
  selector: "app-doctor",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./doctor.html",
  styleUrl: "./doctor.css",
})
export class DoctorComponent extends BaseComponent {
   protected override listUrl = "/doctors";

  override get title(): string {
    return this.isEditMode ? "Edit Role" : "Add Role";
  }

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    router: Router,
    route: ActivatedRoute,
  ) {
    super(router, route);
    this.form = this.buildForm();
  }

    readonly specializationOptions = [
            "Cardiologist",
            "Dermatologist",
            "Neurologist",
            "Orthopedic",
            "Pediatrician",
            "Gynecologist",
            "Dentist",
            "Psychiatrist",
            "General Physician",
            "Ophthalmologist",
            "ENT Specialist",
            "Urologist",
            "Oncologist",
            "Gastroenterologist",
            "Pulmonologist"
  ];

  protected override buildForm(): FormGroup {
    return this.fb.group({
      doctorName: ["", Validators.required],
      specialization: ["", Validators.required],
      contactNo: ["", Validators.required],
      experience: [""],
    });
  }

  protected override populateForm(d: any): void {
    this.form.patchValue({
      doctorName: d.doctorName,
      specialization: d.specialization,
      contactNo: d.contactNo,
      experience: d.experience ?? "",
    });
  }

  protected override getBody(): Doctor {
    return { id: this.entityId ?? 0, ...this.form.value };
  }

  protected override getService() {
    return this.doctorService;
  }
}
