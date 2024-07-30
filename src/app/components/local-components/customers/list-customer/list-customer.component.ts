import { Component, inject, OnInit } from '@angular/core';
import { CustomerService } from '../../../../services/local-services/customer.service';
import { CustomerDeleteModel, CustomerModel } from '../../../../models/local-models/customer.model';

@Component({
  selector: 'app-list-customer',
  standalone: true,
  imports: [],
  templateUrl: './list-customer.component.html',
  styleUrl: './list-customer.component.css',
})
export class ListCustomerComponent implements OnInit {
  customerList: CustomerModel[] = []; // recibe la lista de clientes
  private customerService = inject(CustomerService); // inyecta el servicio de cliente

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer(){
    this.customerService.getCustomers().subscribe({
      next: (data: CustomerModel[]) => {
        this.customerList = data;
      },
      error: (error: any) => {
        console.log('Se encontró un error -->', error);
      },
    });
  }

  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe({
      next: (data:CustomerDeleteModel) =>{
        if(data.status === "OK"){
          this.getAllCustomer();
        }
      },
      error: (error:any)=>{
        console.log('Se encontró un error en eliminar -->', error);
      }
    });
  }
}
