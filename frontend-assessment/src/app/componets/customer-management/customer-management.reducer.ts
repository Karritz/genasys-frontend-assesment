import { createReducer, on } from '@ngrx/store';
import { Customer } from './interfaces/Customer';
import { addCustomer, editCustomer, initialCustomers, removeCustomer, setCustomers } from './customer-management.actions';

var initialState: Customer[] = [];
var initialCall: Boolean = true;

export const customerReducer = createReducer(
    initialState,
    on(setCustomers, (_state, { customers }): Customer[] => {
        return customers;
    }),
    on(initialCustomers, (state, { customers }): Customer[] => {
        if (initialCall) {
            initialCall = false;
            return customers
        } else {
            return state
        }
    }),
    on(addCustomer, (state, { customer }): Customer[] => {
        return [...state, customer]
    }),
    on(removeCustomer, (state, { customer }): Customer[] => {
        let index = state.indexOf(customer);
        let upadatedCustomers: Customer[] = [...state];
        if (upadatedCustomers.length == 1) {
            upadatedCustomers = []
        } else {
            upadatedCustomers = upadatedCustomers.splice(index - 1, 1);
        }
        return upadatedCustomers;
    }),
    on(editCustomer, (state, { customer }): Customer[] => {
        let upadatedCustomer: Customer[] = [...state];
        let found = upadatedCustomer.find((c) => c.id == customer.id);
        if (found) {
            let index = upadatedCustomer.indexOf(found);
            upadatedCustomer[index] = customer;
        }
        return upadatedCustomer;
    })
)