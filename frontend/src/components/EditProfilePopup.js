import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const {currentUser} = useContext(CurrentUserContext);
  const [inputName, setInputName] = useState(currentUser.name);
  const [inputAbout, setInputAbout] = useState(currentUser.about);

  function handleInput(e) {
    if(e.target.name === 'userName') {
      setInputName(e.target.value);
    }
    if(e.target.name === 'userAbout') {
      setInputAbout(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(inputName, inputAbout);
  }

  useEffect(() => {
    setInputName(currentUser.name);
    setInputAbout(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      popupType={'popup'}
      name={'editProfileForm'}
      title={'Редактировать профиль'}
      btnText={'Сохранить'}
    >
      <label className="form__field">
        <input
          onChange={handleInput}
          value={inputName || ''}
          className="form__input form__input_name"
          name="userName" type="text"
          placeholder="Напишите имя"
          required
          minLength="2"
          maxLength="40"
        />
      </label>
      <label className="form__field">
        <input
          onChange={handleInput}
          value={inputAbout || ''}
          className="form__input form__input_about"
          name="userAbout" type="text"
          placeholder="Напишите о себе"
          required
          minLength="2"
          maxLength="200"
        />
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;