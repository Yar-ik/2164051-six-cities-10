import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { favoriteOffers } from './mocks/favoriteOffers';
import { commentsList } from './mocks/commentsList';

const Setting = {
  RENTAL_OFFERS: 312,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App
    rentalOffers={Setting.RENTAL_OFFERS}
    offers={offers}
    favoriteOffers={favoriteOffers}
    commentsList={commentsList}
  />
);
