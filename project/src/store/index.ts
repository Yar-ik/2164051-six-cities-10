import { configureStore } from '@reduxjs/toolkit';
import { sixCitiesReducer as reducer } from './reducer';
import { createAPI } from '../services/api';
import { redirect } from './middlewarres/redirect';

// export const store = configureStore({ reducer });

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddlevare) =>
    getDefaultMiddlevare({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
