import { Component, inject, OnInit } from '@angular/core';
import { CustomerService } from '../../../../services/local-services/customer.service';
import { CustomerDeleteModel, CustomerModel } from '../../../../models/local-models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-customer',
  standalone: true,
  imports: [],
  templateUrl: './list-customer.component.html',
  styleUrl: './list-customer.component.css',
})
export class ListCustomerComponent implements OnInit {
  // Variables de la clase
  public customerList: CustomerModel[] = []; // recibe la lista de clientes
  private customerService = inject(CustomerService); // inyecta el servicio de cliente
  private router= inject(Router); // inyecta el router

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

  createCustomer(){
    this.router.navigate(['/create-customer']);
  }
}
