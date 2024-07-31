export interface CustomerModel {
    customerId: number;
    firstName:  string;
    lastName:   string;
    email:      string;
}

export interface CustomerDeleteModel {
    status:    string;
    customers: null;
}


export const customnerInit: CustomerModel = {
    customerId: 0,
    firstName:  '',
    lastName:   '',
    email:      ''
};