import { CommentsList } from '../../types';

type Props = {
  commentsList: CommentsList;
};
function Comment({ commentsList }: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src="img/avatar-max.jpg"
              width="54"
              height="54"
              alt="Reviews avatar"
            />
          </div>
          <span className="reviews__user-name">Max</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">{commentsList.rating}</span>
            </div>
          </div>
          <p className="reviews__text">{commentsList.comment}</p>
          <time className="reviews__time" dateTime={commentsList.date}>
            April 2019
          </time>
        </div>
      </li>
    </ul>
  );
}

export default Comment;
