import Popup from './Popup';

function PopupWithForm({isOpen, onClose, onSubmit, popupType, name, title, btnText, children}) {

  return (
    <Popup
      popupType={popupType}
      isOpen={isOpen}
      onClose={onClose}
    >
      <h3 className="popup__title">{title}</h3>
      <form onSubmit={onSubmit} className={`form ${name}-form`} name={name}>
        {children}
        <button className="button form__submit-btn" type="submit">{btnText}</button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;