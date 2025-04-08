import { createReducer, on } from '@ngrx/store';
import { addQuote, editQuote, removeQuote, setQuotes } from './quote-managment.actions';
import { Quote } from './interfaces/Quote';


var initialState: Quote[] = [];

export const quoteReducer = createReducer(
    initialState, 
    on(setQuotes, ( _state, { quotes }) => ( quotes )),
    on(addQuote, (state, { quote }) => ({
        ...state, 
        customers: [...state, quote]
    })),
    on(removeQuote, (state, { quote }): Quote[] => {
        let index = state.indexOf(quote);
        let upadatedCustomers = state.splice(index, 1);
        return upadatedCustomers;
    }),
    on(editQuote, (state, { quote }): Quote[] => {
        let found = state.find((c) => c.id == quote.id);
        if (found) {
            let index = state.indexOf(found);
            state[index] = quote;
        }
        return state;
    })
)