import { Offer } from '../types';
import OfferCard from './card/offerCard';

type Props = {
  offers: Offer[];
  onListItemHover: (listItemName: string) => void;
};

function OfferList({ offers, onListItemHover }: Props) {
  return (
    <>
      {offers.map((offer) => (
        <div
          onMouseOver={() => onListItemHover(offer.title)}
          onMouseLeave={() => onListItemHover('')}
          key={offer.id}
        >
          <OfferCard offer={offer} />
        </div>
      ))}
    </>
  );
}
export default OfferList;
