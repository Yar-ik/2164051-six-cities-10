import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Page404 from '../../pages/404/404';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import { CommentsList, FavoriteOffer } from '../../types';
// import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';

type AppMainProps = {
  favoriteOffers: FavoriteOffer[];
  commentsList: CommentsList[];
};

function App({ favoriteOffers, commentsList }: AppMainProps): JSX.Element {
  const { authorizationStatus, isDataLoaded } = useSelector(
    (state: any) => state.authorizationStatus
  );

  // if (isDataLoaded(authorizationStatus) || isDataLoaded) {
  //   return <LoadingScreen />;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites favoriteOffers={favoriteOffers} />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Room}
          element={<Room commentsList={commentsList} />}
        />
        <Route path={AppRoute.Page404} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
