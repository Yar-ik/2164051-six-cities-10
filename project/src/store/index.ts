import { configureStore } from '@reduxjs/toolkit';
import { sixCitiesReducer as reducer } from './reducer';
import { createAPI } from './../api';

// export const store = configureStore({ reducer });

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddlevare) =>
    getDefaultMiddlevare({
      thunk: {
        extraArgument: api,
      },
    }),
});
