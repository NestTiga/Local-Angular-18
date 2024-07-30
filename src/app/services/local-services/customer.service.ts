import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDeleteModel, CustomerModel } from '../../models/local-models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private http = inject(HttpClient);
  private baseUrl = '';

  getCustomers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(`${this.baseUrl}findAll`);
  }

  getCustomerById(id: number): Observable<CustomerModel> {
    return this.http.get<CustomerModel>(`${this.baseUrl}findById/${id}`);
  }

  createCustomer(customer: CustomerModel): Observable<CustomerModel> {
    return this.http.post<CustomerModel>(`${this.baseUrl}createCustomer`, customer);
  }

  updateCustomer(id: number, customer:CustomerModel):Observable<CustomerModel>{
    return this.http.put<CustomerModel>(`${this.baseUrl}updateCustomer/${id}`, customer);
  }

  deleteCustomer(id:number):Observable<CustomerDeleteModel>{
    return this.http.delete<CustomerDeleteModel>(`${this.baseUrl}deleteCustomer/${id}`);
  }

}
