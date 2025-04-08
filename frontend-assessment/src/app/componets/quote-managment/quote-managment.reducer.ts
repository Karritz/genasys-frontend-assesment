import { createReducer, on } from '@ngrx/store';
import { addQuote, editQuote, initialQuotes, removeQuote, setQuotes } from './quote-managment.actions';
import { Quote } from './interfaces/Quote';


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
    on(addQuote, (state, { quote }) => ({
        ...state, 
        customers: [...state, quote]
    })),
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
        let found = state.find((c) => c.id == quote.id);
        if (found) {
            let index = state.indexOf(found);
            state[index] = quote;
        }
        return state;
    })
)