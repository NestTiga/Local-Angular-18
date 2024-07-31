import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../../../services/local-services/customer.service';
import { CustomerModel } from '../../../../models/local-models/customer.model';

@Component({
  selector: 'app-create-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export class CreateCustomerComponent {

  formCustomer: FormGroup; // formulario de cliente
  private router= inject(Router); // inyecta el router
  private form= inject(FormBuilder); // inyecta el formulario
  private customerService= inject(CustomerService); // inyecta el servicio de cliente

  constructor(){
    this.formCustomer = this.form.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  createCustomer(){
    this.customerService.createCustomer(this.formCustomer.value).subscribe({
      next:(customer:CustomerModel)=>{
        console.log("Cliente ingresado correctamente -->", customer);
        this.formCustomer.reset();
        this.router.navigate(['/customers']);
      },
      error:(error:any)=>{
        console.log("Se encontró un error al querer ingresar un cliente -->", error);
      }
    });
  }

  cancelar(){
    this.router.navigate(['/customers']);
  }
}
