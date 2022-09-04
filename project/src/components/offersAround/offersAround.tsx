import { useNavigate } from 'react-router-dom';
import { Offer } from '../../types';
import { calcRatingPercent, upFirstLetter } from './../../utils/utils';

type Props = {
  list: Offer[];
};

function OffersAround({ list }: Props) {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    navigate(`/offer/${id}`);
  };
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {list.map((item) => (
            <article className="near-places__card place-card" key={item.id}>
              {item.isPremium ? (
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
              ) : null}

              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#todo">
                  <img
                    className="place-card__image"
                    src={item.previewImage}
                    width="260"
                    height="200"
                    aria-hidden
                    alt="Place image"
                  />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">
                      &euro;{item.price}
                    </b>
                    <span className="place-card__price-text">
                      &#47;&nbsp;night
                    </span>
                  </div>
                  <button
                    className="place-card__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="place-card__bookmark-icon"
                      width="18"
                      height="19"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span
                      style={{ width: calcRatingPercent(item.rating) }}
                    ></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a
                    href={`/offer/${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                  >
                    {item.title}
                  </a>
                </h2>
                <p className="place-card__type">{upFirstLetter(item.type)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OffersAround;
