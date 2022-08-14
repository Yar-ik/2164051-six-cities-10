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

  return (
    <>
      {offers.map((offer) => (
        <div
          onMouseOver={() => handleListItemHover(offer.title)}
          onMouseLeave={() => handleListItemHover('')}
          key={offer.id}
        >
          <OfferCard offer={offer} />
        </div>
      ))}
    </>
  );
}
export default OfferList;
