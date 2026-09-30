import { ChangeDetectorRef, Component } from "@angular/core";
import { BaseListComponent } from "../base/base-list.component";
import { VendorService } from "../services/vendor.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { BaseService } from "../services/base.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-vendor-list",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./vendor-list.html",
  styleUrl: "./vendor-list.css",
})
export class VendorListComponent extends BaseListComponent {
   protected override pageUrl = '/vendors';

  constructor(private fb: FormBuilder, private vendorService: VendorService, router: Router, cdr: ChangeDetectorRef) {
    super(router, cdr);
    this.form = this.buildForm();
  }

    protected override buildForm(): FormGroup {
    return this.fb.group({
      vendorName: [''],
      mobileNo: [''],
      address: [''],
      serviceType: ['']
    });
  }

  protected override getService(): BaseService { return this.vendorService; }
}
