import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types';

type ActionName = 'city/setOfferList' | 'city/setCity';

export interface Action {
  type: ActionName;
  payload: any;
}

export const setOfferList = createAction<Offer[]>('city/setOfferList');

export const setCity = createAction<string>('city/setCity');

export const setDataLoadedStatus = createAction<boolean>(
  'data/setDataLoadedStatus'
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const redirectToRoute = createAction<AppRoute>('city/redirectToRoute');
