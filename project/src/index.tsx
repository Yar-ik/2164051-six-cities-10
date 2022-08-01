import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { favoritOffers } from './mocks/favoritOffers';
import { commentsList } from './mocks/commentsList';

const Setting = {
  RENTAL_OFFERS: 312,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentalOffers={Setting.RENTAL_OFFERS}
      offers={offers}
      favoritOffers={favoritOffers}
      commentsList={commentsList}
    />
  </React.StrictMode>
);
