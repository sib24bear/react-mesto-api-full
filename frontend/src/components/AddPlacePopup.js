import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [inputName, setInputName] = useState('');
  const [inputLink, setInputLink] = useState('');

  function handleInput(e) {
    if(e.target.name === 'name') {
      setInputName(e.target.value);
    }
    if(e.target.name === 'link') {
      setInputLink(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(inputName, inputLink);
  }

  useEffect(() => {
      setInputName('');
      setInputLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      popupType={'popup'}
      name={'addPlaceForm'}
      title={'Новое место'}
      btnText={'Создать'}
    >
      <label className="form__field">
        <input
          onChange={handleInput}
          value={inputName}
          className="form__input form__input_place-name"
          name="name"
          type="text"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
      </label>
      <label className="form__field">
        <input
          onChange={handleInput}
          value={inputLink}
          className="form__input form__input_place-link"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;