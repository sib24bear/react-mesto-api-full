import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = (props) => {
  const [formParams, setFormParams] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormParams((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = formParams;
    props.handleRegister({ password, email }).catch(err => {
      setMessage(err.message);
      console.log(message);
    });
  }

  return (
    <div className="login">
      <h3 className="login__title">Регистрация</h3>
      <form onSubmit={handleSubmit} className="form login__form" name="loginForm">
        <label className="form__field login__field">
          <input
            value={formParams.email}
            onChange={handleChange}
            className="login__input login__input_type_email"
            name="email" 
            type="email"
            placeholder="Email"
            required
          />
        </label>
        <label className="form__field login__field">
          <input
            value={formParams.password}
            onChange={handleChange}
            className="login__input login__input_type_password"
            name="password"
            type="password"
            placeholder="Пароль"
            required
          />
        </label>
        <button className="button login__submit-btn" type="submit">Зарегистрироваться</button>
      </form>
      <div className="login__signin">
        <p className="login__signin-text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="login__signin-link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;