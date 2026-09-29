import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { ServiceLocator } from "./service-locator";
import { ORSAPI } from "./orsapi.config";

export interface Doctor {
  id: number;
  doctorName: string;
  specialization: string;
  experience?: number;
  contactNo?: string;
  [key: string]: unknown;
}

@Injectable({
  providedIn: "root",
})
export class DoctorService extends BaseService{

    constructor(serviceLocator: ServiceLocator) {
      super(serviceLocator);
      this.url = ORSAPI.DOCTOR_API;
      this.supportsPreload = false;
    }
}
