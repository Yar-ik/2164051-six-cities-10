import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../../components/drop-down-form/drop-down-form';
import Logo from '../../components/logo/logo';
import OfferList from '../../components/offerList';
import { AppRoute } from '../../const';
import { Offer, Point } from '../../types';
import Map from './../../components/map/map';

type MainProps = {
  rentalOffers: number;
  offers: Offer[];
};

function Main({ rentalOffers, offers }: MainProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const points = offers.map((item) => ({
    ...item.location,
    title: item.title,
  }));

  const onListItemHover = (listItemName: string) => {
    const currentPoint = points.find((offer) => offer.title === listItemName);

    setSelectedPoint(currentPoint);
  };

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
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#todo"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
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
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#todo">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#todo">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#todo">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className="locations__item-link tabs__item tabs__item--active"
                  href="#todo"
                >
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#todo">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#todo">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {rentalOffers} places to stay in Amsterdam
              </b>

              <DropDown />
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={offers} onListItemHover={onListItemHover} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map points={points} selectedPoint={selectedPoint} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
