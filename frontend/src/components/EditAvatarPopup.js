import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const [inputAvatar, setInputAvatar] = useState({avatar: ''});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputAvatar((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 

    onUpdateAvatar(inputAvatar.avatar);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      popupType={'popup'}
      name={'editAvatar'}
      title={'Обновить аватар'}
      btnText={'Обновить'}
    >
      <label className="form__field">
        <input
          value={inputAvatar.avatar}
          onChange={handleChange}
          className="form__input form__input_avatar"
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          required />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;