import { useState } from 'react';
import { Offer } from '../types';
import OfferCard from './card/offerCard';

type Props = {
  offers: Offer[];
};

function OfferList({ offers }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState('');
  return (
    <>
      {offers.map((offer) => (
        <div
          onMouseOver={() => setActiveCard(offer.id.toString())}
          onMouseLeave={() => setActiveCard('')}
          key={offer.id}
        >
          <OfferCard offer={offer} />
        </div>
      ))}
    </>
  );
}
export default OfferList;
