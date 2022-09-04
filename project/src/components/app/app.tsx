// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import Page404 from '../../pages/404/404';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import { FavoriteOffer } from '../../types';
import HistoryRouter from '../history-route/history-route';
// import LoadingScreen from '../loading-screen/loading-screen';
// import Logo from '../logo/logo';
import PrivateRoute from '../private-route/private-route';
// import { isCheckedAuth } from './../../store/api-actions';

type AppMainProps = {
  favoriteOffers: FavoriteOffer[];
};

function App({ favoriteOffers }: AppMainProps): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites favoriteOffers={favoriteOffers} />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Room} element={<Room />} />
        <Route path={AppRoute.Page404} element={<Page404 />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
