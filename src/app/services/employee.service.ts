import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { ORSAPI } from "./orsapi.config";
import { ServiceLocator } from "./service-locator";

export interface Employee {
  id: number;
  employeeId: string;
  employeeName: string;
  department: string;
  salary: number;
  status?: string;
  [key: string]: unknown;
}

@Injectable({ providedIn: "root" })
export class EmployeeService extends BaseService {
  constructor(serviceLocator: ServiceLocator) {
    super(serviceLocator);
    this.url = ORSAPI.EMPLOYEE_API;
  }
}