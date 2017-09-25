export interface User {
    id: string;
    firstName: string;
    lastName: string;
    address: UserAddress;
}

export interface UserAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
}

export interface UserPayload {
    id?: string;
    User: User;
}
