import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
// import OfferList from '../../components/offerList';
import { AppRoute } from '../../const';
import { Offer } from '../../types';
// import { offers } from './../../mocks/offers';

type Props = {
  offers: Offer[];
};

const favoritCard = (
  <>
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <a href="#todo">
        <img
          className="place-card__image"
          src="img/apartment-small-04.jpg"
          width="150"
          height="110"
          aria-hidden
          alt="Place picture"
        />
      </a>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;180</b>
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
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#todo">White castle</a>
      </h2>
      <p className="place-card__type">Apartment</p>
    </div>
  </>
);

function Favorites({ offers }: Props): JSX.Element {
  return (
    <body>
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

                  <div className="favorites__places">
                    {offers.map((offers) => (
                      <article>{favoritCard}</article>
                    ))}
                    ;
                    <article className="favorites__card place-card">
                      {/* <div className="place-card__mark">
                        <span>Premium</span>
                      </div> */}

                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <a href="#todo">
                          <img
                            className="place-card__image"
                            src="img/apartment-small-03.jpg"
                            width="150"
                            height="110"
                            aria-hidden
                            alt="Place image"
                          />
                        </a>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">
                              &euro;{offers.price}
                            </b>
                            <span className="place-card__price-text">
                              &#47;&nbsp;night
                            </span>
                          </div>
                          <button
                            className="place-card__bookmark-button place-card__bookmark-button--active button"
                            type="button"
                          >
                            <svg
                              className="place-card__bookmark-icon"
                              width="18"
                              height="19"
                            >
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">
                              In bookmarks
                            </span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{ width: '100%' }}></span>
                            <span className="visually-hidden">
                              {offers.rating}
                            </span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <a href="#todo">Nice, cozy, warm big bed apartment</a>
                        </h2>
                        <p className="place-card__type">{offers.type}</p>
                      </div>
                    </article>
                    <article className="favorites__card place-card">
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <a href="#todo">
                          <img
                            className="place-card__image"
                            src="img/room-small.jpg"
                            width="150"
                            height="110"
                            aria-hidden
                            alt="Place image"
                          />
                        </a>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">
                              &euro;{offers.price}
                            </b>
                            <span className="place-card__price-text">
                              &#47;&nbsp;night
                            </span>
                          </div>
                          <button
                            className="place-card__bookmark-button place-card__bookmark-button--active button"
                            type="button"
                          >
                            <svg
                              className="place-card__bookmark-icon"
                              width="18"
                              height="19"
                            >
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">
                              In bookmarks
                            </span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{ width: '80%' }}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <a href="#todo">{offers.title}</a>
                        </h2>
                        <p className="place-card__type">Private room</p>
                      </div>
                    </article>
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
                  <div className="favorites__places">
                    <article className="favorites__card place-card">
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <a href="#todo">
                          <img
                            className="place-card__image"
                            src="img/apartment-small-04.jpg"
                            width="150"
                            height="110"
                            aria-hidden
                            alt="Place picture"
                          />
                        </a>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;180</b>
                            <span className="place-card__price-text">
                              &#47;&nbsp;night
                            </span>
                          </div>
                          <button
                            className="place-card__bookmark-button place-card__bookmark-button--active button"
                            type="button"
                          >
                            <svg
                              className="place-card__bookmark-icon"
                              width="18"
                              height="19"
                            >
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">
                              In bookmarks
                            </span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{ width: '100%' }}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <a href="#todo">White castle</a>
                        </h2>
                        <p className="place-card__type">Apartment</p>
                      </div>
                    </article>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
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
    </body>
  );
}

export default Favorites;
