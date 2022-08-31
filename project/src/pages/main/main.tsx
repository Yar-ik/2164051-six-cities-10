import { useState, useMemo } from 'react';
import DropDownForm from '../../components/drop-down-form/drop-down-form';
import OfferList from '../../components/offerList';
import { Offer, Point } from '../../types';
import Map from './../../components/map/map';
import CityList from './../../components/city-list/city-list';
import { CITIES } from './../../const';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { logoutAction } from '../../store/api-actions';
import Header from './../../components/header/header';

function Main(): JSX.Element {
  const offerList: Offer[] = useSelector((state: any) => state.offerList);

  const [city, setCity] = useState(CITIES[0]);

  const offers = useMemo(
    () => offerList.filter((offer) => offer.city.name === city),
    [offerList, city]
  );

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

  const countOffers = offerList.length;

  // const dispatch = useDispatch();

  // dispatch(logoutAction());

  return (
    <>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList cities={CITIES} city={city} onCityChange={setCity} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {countOffers} places to stay in {city}
              </b>

              <DropDownForm />

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
