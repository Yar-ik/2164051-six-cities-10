import ApartamentCard01 from './card/apartamentCard-01';
import ApartamentCard02 from './card/apartamentCard-02';
import ApartamentCard03 from './card/apartamentCard-03';
import RoomCard from './card/roomCard';

type OfferListProps = {
  rentalOffers: number;
};

function OfferList({ rentalOffers }: OfferListProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {rentalOffers} places to stay in Amsterdam
      </b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>
            Popular
          </li>
          <li className="places__option" tabIndex={0}>
            Price: low to high
          </li>
          <li className="places__option" tabIndex={0}>
            Price: high to low
          </li>
          <li className="places__option" tabIndex={0}>
            Top rated first
          </li>
        </ul>
      </form>

      <div className="cities__places-list places__list tabs__content">
        <ApartamentCard01 />
        <RoomCard />
        <ApartamentCard02 />
        <ApartamentCard03 />
        <RoomCard />
      </div>
    </section>
  );
}
export default OfferList;
