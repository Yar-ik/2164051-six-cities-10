// import { createSlice, configureStore } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Action, requireAuthorization, setCity, setOfferList } from './action';
import { Offer } from '../types';

type InitialState = {
  city: string;
  offerList: Offer;
  authorizationStatus: AuthorizationStatus;
};

const initialState = {
  city: 'Paris',
  offerList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const sixCitiesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case setOfferList.toString():
      return {
        ...state,
        offerList: action.payload,
      };

    case setCity.toString():
      return {
        ...state,
        city: action.payload,
      };

    case requireAuthorization.toString():
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export { sixCitiesReducer };
