import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomerModel, customnerInit } from '../../../models/local-models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class ShareCustomerService {
  private customerSubject:BehaviorSubject<CustomerModel> = new BehaviorSubject<CustomerModel>(customnerInit);

  constructor() {
  }

  setCustomer(customer: CustomerModel): void {
    this.customerSubject.next(customer);
  }

  getCustomer(): Observable<CustomerModel> {
    return this.customerSubject.asObservable();
  }
}
