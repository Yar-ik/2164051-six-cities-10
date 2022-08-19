// import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Action, setCity, setOfferList } from './action';

const initialState = { city: 'Paris', offerList: [] };

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
    default:
      return state;
  }
};

export { sixCitiesReducer };
