import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { favoriteOffers } from './mocks/favoriteOffers';
import { commentsList } from './mocks/commentsList';
import { Provider } from 'react-redux';
import { store } from './store/index';
import {
  checkAuthAction,
  fetchOfferListAction,
  loginAction,
} from './store/api-actions';
import { ToastContainer } from 'react-toastify';

store.dispatch(fetchOfferListAction());
store.dispatch(loginAction({ email: 'abc@abc.com', password: '123' }));
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ToastContainer />

    <App favoriteOffers={favoriteOffers} commentsList={commentsList} />
  </Provider>
);
