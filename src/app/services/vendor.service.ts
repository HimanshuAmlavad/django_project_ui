import { Injectable } from "@angular/core";
import { ServiceLocator } from "./service-locator";
import { BaseService } from "./base.service";
import { ORSAPI } from "./orsapi.config";

export interface Vendor {
  id: number;
  vendorName: string;
  mobileNo: string;
  address: string;
  serviceType?: string;
  [key: string]: unknown;
}


@Injectable({
  providedIn: "root",
})
export class VendorService extends BaseService {
    constructor(serviceLocator: ServiceLocator) {
      super(serviceLocator);
      this.url = ORSAPI.VENDOR_API;
}
}