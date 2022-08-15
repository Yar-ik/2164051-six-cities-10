import { configureStore } from '@reduxjs/toolkit';
import { sixCitiesReducer as reducer } from './reducer';
export const store = configureStore({ reducer });
