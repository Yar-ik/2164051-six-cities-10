import { Offer } from '../types';
import OfferCard from './card/offerCard';

type Props = {
  offers: Offer[];
  onListItemHover: (listItemName: string) => void;
};

function OfferList({ offers, onListItemHover }: Props) {
  const handleListItemHover = (title: string) => {
    onListItemHover(title);
  };
  // console.log((offers.length = 6));
  // offers.length = 6;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          onMouseOver={() => handleListItemHover(offer.title)}
          onMouseLeave={() => handleListItemHover('')}
          key={offer.id}
        >
          <OfferCard offer={offer} />
        </div>
      ))}
    </div>
  );
}
export default OfferList;
