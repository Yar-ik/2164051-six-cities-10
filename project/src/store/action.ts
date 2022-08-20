import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types';

type ActionName = 'city/setOfferList' | 'city/setCity';

export interface Action {
  type: ActionName;
  payload: any;
}

export const setOfferList = createAction<Offer[]>('city/setOfferList');
export const setCity = createAction<string>('city/setCity');

// Дженерик для setCity  <string>
