import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setBookmark } from '../../store/api-actions';
import { Offer } from '../../types';

import Header from './../../components/header/header';
import { api } from './../../store/index';

function Favorites(): JSX.Element {
  const [favorites, setFavorites] = useState<Offer[]>([]);
  const dispatch = useAppDispatch();

  const fetchFavorites = () => {
    api.get('/favorite').then((res) => {
      setFavorites(res.data);
    });
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleDeleteBookmark = (offer: Offer) => {
    dispatch(setBookmark({ hotelId: offer.id, isFavorite: offer.isFavorite }));
    fetchFavorites();
  };

  const navigate = useNavigate();
  const favoritItems = favorites.map((offer) => (
    <article key={offer.id}>
      <div>
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <a href="#todo">
            <img
              className="place-card__image"
              src={offer.previewImage}
              width="150"
              height="110"
              alt={offer.city.name}
            />
          </a>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button place-card__bookmark-button--active button"
              type="button"
              onClick={() => handleDeleteBookmark(offer)}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '100%' }}></span>
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
      </div>
    </article>
  ));

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#todo">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>

                <div className="favorites__places">
                  {favorites.length ? favoritItems : 'Nothing yet saved'}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#todo">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places"></div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
