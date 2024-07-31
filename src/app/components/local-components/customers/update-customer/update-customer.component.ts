import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShareCustomerService } from '../../../../services/local-services/share-data/share-customer.service';
import { CustomerModel } from '../../../../models/local-models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../../../services/local-services/customer.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css',
})
export class UpdateCustomerComponent implements OnInit {
  public editCustomerForm!: FormGroup; // formulario de edición de cliente
  private shareCustomerService = inject(ShareCustomerService); // inyecta el servicio de compartir datos de cliente
  private form = inject(FormBuilder); // inyecta el formulario para crear el formulario
  private router = inject(Router); // inyecta el router para la navegación
  private routeParam = inject(ActivatedRoute); // inyecta el servicio de rutas para obtener los parámetros de la ruta
  private idCustomer: number = 0; // id del cliente
  private customerService= inject(CustomerService); // inyecta el servicio de cliente para actualizar el cliente

  ngOnInit(): void {
    this.obetenerId();
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.shareCustomerService.getCustomer().subscribe({
      next: (customer: CustomerModel) => {
        this.editCustomerForm = this.form.group({
          firstName: [customer.firstName, Validators.required],
          lastName: [customer.lastName, Validators.required],
          email: [customer.email, [Validators.required, Validators.email]],
        });
      },
      error: (error: any) => {
        console.log(
          'Se encontró un error al querer obtener el cliente en el udpate -->',
          error
        );
      },
    });
  }

  obetenerId() {
    this.routeParam.params.subscribe((params) => {
      this.idCustomer = params['idCustomer'];
    });
  }

  hasError(dataName: string, errorName: string) {
    return (
      this.editCustomerForm.get(dataName)?.hasError(errorName) &&
      this.editCustomerForm.get(dataName)?.touched
    );
  }

  cancelar() {
    this.router.navigate(['/customers']);
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.idCustomer, this.editCustomerForm.value).subscribe({
      next:(customer:CustomerModel)=>{
        this.router.navigate(['/customers']);
      },
      error:(error:HttpErrorResponse)=>{
        console.log("Se encontró un error al querer actualizar el cliente -->", error);
      }
    });
  }
}
