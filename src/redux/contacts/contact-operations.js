import axios from 'axios';
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
  // errorRequest,
  // errorSuccess,
  // errorError,
} from './contact-actions';

axios.defaults.baseURL = 'http://localhost:2222';

/**
 * Операция это функция, вызванная в компоненте,
 * которая возвращает другую функцию, в которой
 * выполняются асинх запросы по паттерну:
 * Request > Success > Error
 */

// GET
export const GET = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

// ADD
export const ADD = text => async dispatch => {
  const newContact = { name: text.name, number: text.number };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', newContact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

// DELETE
export const DELETE = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
