import { AuthorizationStatus } from '../const';
import {
  Action,
  requireAuthorization,
  setCity,
  setDataLoadedStatus,
  setOfferList,
} from './action';
import { Offer } from '../types';

type InitialState = {
  city: string;
  offerList: Offer[];
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
};

const initialState: InitialState = {
  city: 'Paris',
  offerList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
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

    case setDataLoadedStatus.toString():
      return {
        ...state,
        isDataLoaded: action.payload,
      };

    case requireAuthorization.toString():
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    default:
      return state;
  }
};

export { sixCitiesReducer };
