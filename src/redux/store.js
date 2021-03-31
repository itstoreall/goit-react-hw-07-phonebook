import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'; // Don't delete
import { contactsReducer } from './contacts';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Thunk ловит функции, которые вместо объектов
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger, // Don't delete
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store; // eslint-disable-line
