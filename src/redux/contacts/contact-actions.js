import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const ADD = createAction('contact/add', newContact => ({
  payload: {
    id: uuidv4(),
    name: newContact.name,
    number: newContact.number,
  },
}));
export const DELETE = createAction('contact/delete');
export const FILTER = createAction('contact/filter');
