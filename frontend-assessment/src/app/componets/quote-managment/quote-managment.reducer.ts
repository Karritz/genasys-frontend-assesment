import { createReducer, on } from '@ngrx/store';
import { addQuote, editQuote, initialQuotes, removeQuote, setQuotes } from './quote-managment.actions';
import { Quote } from './interfaces/Quote';
import { Customer } from '../customer-management/interfaces/Customer';


var initialState: Quote[] = [];
var initialCall: Boolean = true;

export const quoteReducer = createReducer(
    initialState, 
    on(setQuotes, ( _state, { quotes }) => ( quotes )),
    on(initialQuotes, ( state, { quotes }): Quote[] => {
        if(initialCall) {
            initialCall = false;
            return quotes
        } else {
            return state
        }
    }),
    on(addQuote, (state, { quote }): Quote[] => { 
        return [...state, quote]
    }),
    on(removeQuote, (state, { quote }): Quote[] => {
        let index = state.indexOf(quote);
        let upadatedQuotes: Quote[] = [...state];
        if(upadatedQuotes.length == 1) {
            upadatedQuotes = []
        } else {
            upadatedQuotes = upadatedQuotes.splice(index - 1, 1);
        }
        return upadatedQuotes;
    }),
    on(editQuote, (state, { quote }): Quote[] => {
        let upadatedQuotes: Quote[] = [...state];
        let found = upadatedQuotes.find((c) => c.id == quote.id);
        if (found) {
            let index = upadatedQuotes.indexOf(found);
            upadatedQuotes[index] = quote;
        }
        return upadatedQuotes;
    })
)