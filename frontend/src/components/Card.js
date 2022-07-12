import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import DeleteButton from './DeleteButton';

function Card({name, link, likes, owner, _id, onCardClick, onCardDelete, onCardLike}) {
  const {currentUser} = useContext(CurrentUserContext);
  function showDeleteCardBtn(owner, id) {
    const isOwn = owner === currentUser._id;

    if (isOwn) {
      return(
        <DeleteButton id={id} onCardDelete={onCardDelete} />
      );
    }
  }

  function showCardLike(likes) {
    const isLiked = likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      return ('place-card__button_active');
    }
  }

  function handleLikeClick() {
    onCardLike(likes, _id)
  }

  function handleCardClick() {
    onCardClick( name, link );
  }

  return (
    <li className="gallery__item">
      <div className="place-card">
        <img
          onClick={handleCardClick}
          className="place-card__img"
          src={link}
          alt={name}
        />
        <div className="place-card__description">
          <h2 className="place-card__title">{name}</h2>
          <button onClick={handleLikeClick} className={`button place-card__button button_type_add-like ${showCardLike(likes)}`} type="button" aria-label="Поставить лайк">
            <span className="place-card__like-counter">{likes.length ? likes.length : ''}</span>
          </button>
          {showDeleteCardBtn(owner._id, _id)}
        </div>
      </div>
    </li>
  );
}

export default Card;