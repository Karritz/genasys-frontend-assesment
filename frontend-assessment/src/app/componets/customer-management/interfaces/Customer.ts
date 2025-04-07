import { Address } from "./Address";

export interface Customer {
    id: number,
    firstName: string,
    lastName: string,
    addresses: Address[],
}