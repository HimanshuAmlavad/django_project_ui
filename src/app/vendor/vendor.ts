import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { BaseComponent } from "../base/base.component";
import { ActivatedRoute, Router } from "@angular/router";
import { VendorService } from "../services/vendor.service";

@Component({
  selector: "app-vendor",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./vendor.html",
  styleUrl: "./vendor.css",
})
export class VendorComponent extends BaseComponent {
   protected override listUrl = "/vendors";

  override get title(): string {
    return this.isEditMode ? "Edit Vendor" : "Add Vendor";
  }

  constructor(
    private fb: FormBuilder,
    private vendorService: VendorService,
    router: Router,
    route: ActivatedRoute,
  ) {
    super(router, route);
    this.form = this.buildForm();
  }

    readonly serviceOptions = [
        "Catering",
            "Transportation",
            "Decoration",
            "Photography",
            "Security",
            "Cleaning",
            "Electrical",
            "Plumbing",
            "IT Services",
            "Maintenance"
  ];

  protected override buildForm(): FormGroup {
    return this.fb.group({
      vendorName: ["", Validators.required],
      mobileNo: ["", Validators.required],
      address: ["", Validators.required],
      serviceType: ["", Validators.required],
    });
  }

  protected override populateForm(d: any): void {
    this.form.patchValue({
      vendorName: d.vendorName,
      mobileNo: d.mobileNo,
      address: d.address ?? "",
      serviceType: d.serviceType,
    });
  }

  protected override getBody(): Vendor {
    return { id: this.entityId ?? 0, ...this.form.value };
  }

  protected override getService() {
    return this.vendorService;
  }
}
