import Popup from './Popup';

function ImagePopup({ isOpen, onClose, popupType, title, link }) {
  return (
    <Popup
    popupType={popupType}
    isOpen={isOpen}
    onClose={onClose}
    >
      <img
        className="image-popup__img"
        src={link}
        alt={title}
      />
      <h3 className="image-popup__title">{title}</h3>
    </Popup>
  );
}

export default ImagePopup;