import { useState, useMemo, useEffect } from 'react';
import DropDownForm from '../../components/drop-down-form/drop-down-form';
import OfferList from '../../components/offerList';
import { Offer, Point } from '../../types';
import Map from './../../components/map/map';
import CityList from './../../components/city-list/city-list';
import { CITIES, Sort } from './../../const';
import { useSelector } from 'react-redux';
import Header from './../../components/header/header';
import { State } from '../../types/state';

function Main(): JSX.Element {
  const offerList: Offer[] = useSelector((state: State) => state.offerList);

  const [city, setCity] = useState(CITIES[0]);
  const [sortBy, setSortBy] = useState(Sort.Popular);

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

  useEffect(() => {
    switch (sortBy) {
      case Sort.PriceAsc:
        offers.sort((a, b) => a.price - b.price);
        break;
      case Sort.PriceDesc:
        offers.sort((a, b) => b.price - a.price);
        break;
      case Sort.TopRated:
        offers.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
  }, [sortBy]);

  const countOffers = offers.length;

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

              <DropDownForm onSortChange={setSortBy} sortBy={sortBy} />

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
