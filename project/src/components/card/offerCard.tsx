import { Offer } from '../../types';
import { useNavigate } from 'react-router-dom';
import { calcRatingPercent } from './../../utils/utils';
import { useAppDispatch } from './../../hooks/index';
import { setBookmark } from '../../store/api-actions';
import { fetchOfferListAction } from './../../store/api-actions';
import { useSelector } from 'react-redux';
import { State } from '../../types/state';
import { AppRoute, AuthorizationStatus } from '../../const';

type Props = {
  offer: Offer;
};

function OfferCard({ offer }: Props): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { authorizationStatus } = useSelector((state: State) => state);

  const changeBookmark = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(setBookmark({ hotelId: offer.id, isFavorite: offer.isFavorite }));
    dispatch(fetchOfferListAction());
  };

  return (
    <div>
      <article className="cities__card place-card">
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#todo">
            <img
              className="place-card__image"
              src={offer.previewImage}
              width="260"
              height="200"
              alt={offer.city.name}
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button button ${
                offer.isFavorite ? 'place-card__bookmark-button--active' : ''
              }`}
              type="button"
              onClick={changeBookmark}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: calcRatingPercent(offer.rating) }}></span>
              <span className="visually-hidden">{offer.rating}</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a
              href={`/offer/${offer.id}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/offer/${offer.id}`);
              }}
            >
              {offer.title}
            </a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </div>
  );
}

export default OfferCard;
