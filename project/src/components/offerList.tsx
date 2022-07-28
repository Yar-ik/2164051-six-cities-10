import { useState } from 'react';
import { Offer } from '../types';
import OfferCard from './card/offerCard';

type Props = {
  offers: Offer[];
};

function OfferList({ offers }: Props) {
  const [userOffers, setUserOffers] = useState('');
  return (
    <>
      {offers.map((offer) => (
        <div
          onMouseOver={() => setUserOffers(offer.id.toString())}
          key={offer.id}
        >
          <OfferCard offer={offer} />
        </div>
      ))}
    </>
  );
}
export default OfferList;
