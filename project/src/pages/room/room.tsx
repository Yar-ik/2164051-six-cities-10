import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Comment, Offer } from '../../types';
import CommentForm from '../comment-form/comment-form';

import { api } from './../../store/index';
import { useSelector } from 'react-redux';
import { State } from '../../types/state';
import Header from './../../components/header/header';
import { AuthorizationStatus } from '../../const';
import OffersAround from '../../components/offersAround/offersAround';
import { calcRatingPercent, upFirstLetter } from './../../utils/utils';
import CommentList from '../../components/commentList/commentList';

function Room(): JSX.Element {
  const [offer, setOffer] = useState<Offer>({} as Offer);
  const [offersAround, setOffersAround] = useState<Offer[]>([]);
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const { id } = useParams<{ id: string }>();

  const fetchComments = () => {
    api.get(`/comments/${id}`).then((res) => {
      setCommentList(res.data);
    });
  };

  useEffect(() => {
    api
      .get(`/hotels/${id}`)
      .then((res) => {
        setOffer(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });

    api.get(`/hotels/${id}/nearby`).then((res) => {
      setOffersAround(res.data);
    });
    fetchComments();
  }, [id]);

  const authStatus = useSelector((state: State) => state.authorizationStatus);
  const images = offer.images?.slice(0, 6);
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images?.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img
                    className="property__image"
                    src={image}
                    alt={offer.description}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : null}

              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span
                    style={{ width: calcRatingPercent(offer.rating) }}
                    // eslint-disable-next-line react/jsx-closing-tag-location
                  ></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {upFirstLetter(offer.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods?.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={offer.host?.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {offer.host?.name}
                  </span>
                  <span className="property__user-status">
                    {offer.host?.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{commentList.length}</span>
                </h2>
                <CommentList commentList={commentList} />

                {authStatus === AuthorizationStatus.Auth ? (
                  <CommentForm fetchComments={fetchComments} offerId={id} />
                ) : null}
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <OffersAround list={offersAround} />
      </main>
    </div>
  );
}

export default Room;
