import { createReducer } from '@reduxjs/toolkit';
import db from '../../components/dataBase/dataBase.json';
import { combineReducers } from 'redux';
import { ADD, DELETE, FILTER } from './contact-actions';

const itemsReducer = createReducer(db, {
  [ADD]: (state, { payload }) => [payload, ...state],
  [DELETE]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [FILTER]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
