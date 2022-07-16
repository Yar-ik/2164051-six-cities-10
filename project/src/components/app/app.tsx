import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Page404 from '../../pages/404/404';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import PrivateRoute from '../private-route/private-route';

type AppMainProps = {
  rentalOffers: number;
};

function App({ rentalOffers }: AppMainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main rentalOffers={rentalOffers} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Room} element={<Room />} />
        <Route path={AppRoute.Page404} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
