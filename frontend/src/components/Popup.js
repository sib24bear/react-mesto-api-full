import { useEffect } from "react";

const Popup = ({ popupType, isOpen, onClose, children }) => {

  useEffect(() => {
    if (!isOpen) return;
      const closeByEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
    }

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape)
}, [isOpen, onClose])

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
        onClose();
    }
  }

  return (
    <div
      className={`popup ${isOpen && 'popup_opened'}`}
      onClick={handleOverlay}
    >
      <div className={`${popupType}__container`}>
        {children}
        <button
          onClick={onClose}
          className="button popup__close-btn button_type_close-popup"
          type="button"
          title="Закрыть окно"
          aria-label="Закрыть окно"
        />
      </div>
    </div>
  );
};

export default Popup;