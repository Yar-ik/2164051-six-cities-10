import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../../components/drop-down-form/drop-down-form';
import Logo from '../../components/logo/logo';
import OfferList from '../../components/offerList';
import { AppRoute } from '../../const';
import { Offer, Point } from '../../types';
import Map from './../../components/map/map';
import CityList from './../../components/city-list/city-list';
import { CITIES } from './../../const';
import Email from './../../components/email/email';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../store/api-actions';

function Main(): JSX.Element {
  const offerList: Offer[] = useSelector((state: any) => state.offerList);

  const [city, setCity] = useState(CITIES[0]);

  const offers = useMemo(() => offerList.filter((offer) => offer.city.name === city), [offerList, city]);

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const points = offerList.map((item) => ({
    ...item.location,
    title: item.title,
  }));

  const onListItemHover = (listItemName: string) => {
    const currentPoint = points.find((offer) => offer.title === listItemName);

    setSelectedPoint(currentPoint);
  };
  // Получаю название городов из стейта(хранилища)
  const currentCity = useSelector((state: any) => state.city);
  const countOffers = offerList.length;

  const dispatch = useDispatch();

  dispatch(logoutAction());

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Email />
                </li>

                <li className="header__nav-item">
                  <Link to={AppRoute.Login} className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList cities={CITIES} city={city} onCityChange={setCity} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {countOffers} places to stay in {currentCity}
              </b>

              <DropDown />

              <OfferList offers={offers} onListItemHover={onListItemHover} />
            </section>
            <div className="cities__right-section">
              <Map points={points} selectedPoint={selectedPoint} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
