import { createAction, props } from '@ngrx/store';
import { Customer } from './interfaces/Customer';

export const addCustomer = createAction('AddCustomer', props<{customer: Customer}>());
export const removeCustomer = createAction('RemoveCustomer', props<{customer: Customer}>());
export const editCustomer = createAction('EditCustomer', props<{customer: Customer}>());
export const setCustomers = createAction('SetCustomers', props<{customers: Customer[]}>());
