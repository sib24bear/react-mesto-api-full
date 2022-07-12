import { useState } from 'react';

const Login = (props) => {
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
    if (!formParams.email || !formParams.password){
      return;
    }
    props.handleLogin({ email: formParams.email, password: formParams.password })
        .catch(err => {
          setMessage(err.message);
          console.log(message);
        });
  }

  return(
      <div className="login">
        <h3 className="login__title">Вход</h3>
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
          <button className="button login__submit-btn" type="submit">Войти</button>
        </form>
      </div>
  );
}

export default Login;