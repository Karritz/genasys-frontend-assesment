import { createReducer, on } from '@ngrx/store';
import { Customer } from './interfaces/Customer';
import { addCustomer, editCustomer, removeCustomer, setCustomers } from './customer-management.actions';

var initialState: Customer[] = [];

export const customerReducer = createReducer(
    initialState, 
    on(setCustomers, ( _state, { customers }):Customer[] => {
        console.log(customers);
        return customers;
    }),
    on(addCustomer, (state, { customer }) => ({
        ...state, 
        customers: [...state, customer]
    })),
    on(removeCustomer, (state, { customer }): Customer[] => {
        let index = state.indexOf(customer);
        let upadatedCustomers = state.splice(index, 1);
        return upadatedCustomers;
    }),
    on(editCustomer, (state, { customer }): Customer[] => {
        let found = state.find((c) => c.id == customer.id);
        if (found) {
            let index = state.indexOf(found);
            state[index] = customer;
        }
        return state;
    })
)