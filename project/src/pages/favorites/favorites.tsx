import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { FavoriteOffer } from '../../types';

type Props = {
  favoriteOffers: FavoriteOffer[];
};

function Favorites({ favoriteOffers }: Props): JSX.Element {
  const navigate = useNavigate();
  const favoritItems = favoriteOffers.map((offer) => (
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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#todo"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <Link to={AppRoute.Login} className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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

                <div className="favorites__places">{favoritItems}</div>
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
