import { configureStore } from '@reduxjs/toolkit';
import { sixCitiesReducer as reducer } from './reducer';
// import { TypedUseSelectorHook, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

export const store = configureStore({ reducer });

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<State> = useSelector
