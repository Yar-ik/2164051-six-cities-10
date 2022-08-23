import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { favoriteOffers } from './mocks/favoriteOffers';
import { commentsList } from './mocks/commentsList';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { checkAuthAction, fetchOfferListAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchOfferListAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ErrorMessage />
    <App favoriteOffers={favoriteOffers} commentsList={commentsList} />
  </Provider>
);
