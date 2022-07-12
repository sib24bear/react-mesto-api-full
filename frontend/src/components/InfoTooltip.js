import Popup from './Popup';

const InfoTooltip = ({isOpen, onClose, res}) => {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      popupType={'popup'}
    >
      <div className="infotooltip">
        { res ? 
            <img className="infotooltip__img" src={require('../images/Union.svg').default} alt="Успех!" />
          :
            <img className="infotooltip__img" src={require('../images/Union-err.svg').default} alt="Что-то пошло не так!" />
        }
        { res ? 
            <h3 className="infotooltip__title">Вы успешно зарегистрировались!</h3>
          :
            <h3 className="infotooltip__title">Что-то пошло не так! Попробуйте ещё раз.</h3>
        }
      </div>
    </Popup>
  );
}

export default InfoTooltip;