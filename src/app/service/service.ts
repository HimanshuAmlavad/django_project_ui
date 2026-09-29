import { Component } from "@angular/core";
import { BaseComponent } from "../base/base.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Service, ServiceService } from "../services/service.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-service",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./service.html",
  styleUrl: "./service.css",
})
export class ServiceComponent extends BaseComponent {
   protected override listUrl = "/services";

  override get title(): string {
    return this.isEditMode ? "Edit Service" : "Add Service";
  }

  constructor(
    private fb: FormBuilder,
    private serviceService: ServiceService,
    router: Router,
    route: ActivatedRoute,
  ) {
    super(router, route);
    this.form = this.buildForm();
  }

    readonly serviceOptions = [
           "Cleaning",
            "Electrical",
            "Plumbing",
            "Catering",
            "Photography",
            "Transportation",
            "Maintenance",
            "IT Services"
  ];

  protected override buildForm(): FormGroup {
    return this.fb.group({
      serviceName: ["", Validators.required],
      price: ["", Validators.required],
      description: ["", Validators.required],
      serviceCategory: ["", Validators.required],
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

  protected override getBody(): Service {
    return { id: this.entityId ?? 0, ...this.form.value };
  }

  protected override getService() {
    return this.serviceService;
  }
}
