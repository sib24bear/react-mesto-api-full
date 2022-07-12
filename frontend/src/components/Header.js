import { Link } from 'react-router-dom';

function Header({ linkText, email, handleClick, linkTo }) {
  return (
      <header className="header">
        <div className="header__container">
          <a className="logo" href="#">
            <img className="logo__img" src={require('../images/mesto-russia__logo.svg').default} alt="логотип Место" />
          </a>
          <p className="header__email">{email}</p>
          <Link to={linkTo} onClick={handleClick} className="header__link">{linkText}</Link>
        </div>
      </header>
  );
}

export default Header;