import { createAction, props } from '@ngrx/store';
import { Quote } from './interfaces/Quote';

export const addQuote = createAction('AddQuote', props<{quote: Quote}>());
export const removeQuote = createAction('RemoveQuote', props<{quote: Quote}>());
export const editQuote = createAction('EditQuote', props<{quote: Quote}>());
export const setQuotes = createAction('SetQuote', props<{quotes: Quote[]}>());
