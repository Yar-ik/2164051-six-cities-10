import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types';

export const setOfferList = createAction<Offer[]>('city/setOfferList');
export const setCity = createAction<string>('city/setCity');

// Дженерик для setCity  <string>
