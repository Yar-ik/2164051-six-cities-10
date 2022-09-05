import { Comment } from '../../types';
import { calcRatingPercent } from './../../utils/utils';

type Props = {
  commentList: Comment[];
};
function CommentList({ commentList }: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {commentList.map((item) => (
        <li className="reviews__item" key={item.id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img
                className="reviews__avatar user__avatar"
                src={item.user.avatarUrl}
                width="54"
                height="54"
                alt="Reviews avatar"
              />
            </div>
            <span className="reviews__user-name">{item.user.name}</span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: calcRatingPercent(item.rating) }}></span>
                <span className="visually-hidden">{item.rating}</span>
              </div>
            </div>
            <p className="reviews__text">{item.comment}</p>
            <time className="reviews__time" dateTime={item.date}>
              {new Date(item.date).toDateString()}
            </time>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
