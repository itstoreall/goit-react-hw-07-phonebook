import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contact-reducer';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger'; // Don't delete
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger, // Don't delete
];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactReducer),
  },
  middleware,

  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor }; // eslint-disable-line
