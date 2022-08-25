import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { sixCitiesReducer } from '../reducer';

type Reducer = ReturnType<typeof sixCitiesReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action) => {
    if (action.type === 'city/redirectToRoute') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
