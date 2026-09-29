import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { ServiceLocator } from "./service-locator";
import { ORSAPI } from "./orsapi.config";

export interface Service {
  id: number;
  serviceName: string;
  price: number;
  description?: number;
  serviceCategory: string;
  [key: string]: unknown;
}

@Injectable({
  providedIn: "root",
})
export class ServiceService extends BaseService{

    constructor(serviceLocator: ServiceLocator) {
      super(serviceLocator);
      this.url = ORSAPI.SERVICE_API;
      this.supportsPreload = false;
    }
}
