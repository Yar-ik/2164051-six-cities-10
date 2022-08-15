import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { favoriteOffers } from './mocks/favoriteOffers';
import { commentsList } from './mocks/commentsList';
import { Provider } from 'react-redux';
import { store } from './store/index';

const Setting = {
  RENTAL_OFFERS: 312,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App
      rentalOffers={Setting.RENTAL_OFFERS}
      offers={offers}
      favoriteOffers={favoriteOffers}
      commentsList={commentsList}
    />
  </Provider>
);
