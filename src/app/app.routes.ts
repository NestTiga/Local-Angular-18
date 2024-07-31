import { Routes } from '@angular/router';
import { ListCustomerComponent } from './components/local-components/customers/list-customer/list-customer.component';
import { CreateCustomerComponent } from './components/local-components/customers/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/local-components/customers/update-customer/update-customer.component';

export const routes: Routes = [
    {path: 'customers', component: ListCustomerComponent},
    {path: 'create-customer', component: CreateCustomerComponent},
    {path: 'update-customer/:idCustomer', component: UpdateCustomerComponent},
];
