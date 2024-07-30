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
