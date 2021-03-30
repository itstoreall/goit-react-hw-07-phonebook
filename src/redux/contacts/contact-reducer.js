import { createReducer } from '@reduxjs/toolkit';
import db from '../../components/dataBase/db.json';
import { combineReducers } from 'redux';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  contactFilter,
  // errorMessage,
} from './contact-actions';

const itemsReducer = createReducer(db.contacts, {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filterReducer = createReducer('', {
  [contactFilter]: (_, { payload }) => payload,
});

// const error = createReducer(null, {
//   [errorMessage]: 'Error!!!',
// });

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading,
  // error,
});
