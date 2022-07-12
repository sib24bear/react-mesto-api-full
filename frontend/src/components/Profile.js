import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Profile({
  onEditAvatar,
  onEditProfile,
  onAddPlace
  }) {
    const {currentUser} = useContext(CurrentUserContext);
    return (
      <section className="profile">
        <div
          onClick={onEditAvatar}
          className="profile__avatar"
        >
          <img 
            className="profile__avatar-img"
            alt="фото профиля" 
            src={currentUser.avatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__description">{currentUser.about}</p>
          <button
            onClick={onEditProfile}
            className="button profile__edit-btn button_type_edit-profile"
            type="button"
            aria-label="Редактировать профиль"
          ></button>
        </div>
        <button
          onClick={onAddPlace}
          className="button button_type_add-card" 
          type="button" 
          aria-label="Добавить место"
        >
        </button>
      </section>
    );
}

export default Profile;