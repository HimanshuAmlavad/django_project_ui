import { ChangeDetectorRef, Component } from "@angular/core";
import { BaseListComponent } from "../base/base-list.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ServiceService } from "../services/service.service";
import { Router } from "@angular/router";
import { BaseService } from "../services/base.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-service-list",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./service-list.html",
  styleUrl: "./service-list.css",
})
export class ServiceListComponent extends BaseListComponent {
   protected override pageUrl = '/services';

  constructor(private fb: FormBuilder, private serviceService: ServiceService, router: Router, cdr: ChangeDetectorRef) {
    super(router, cdr);
    this.form = this.buildForm();
  }

    protected override buildForm(): FormGroup {
    return this.fb.group({
      serviceName: [''],
      price: [''],
      description: [''],
      serviceCategory: ['']
    });
  }

  protected override getService(): BaseService { return this.serviceService; }
}
