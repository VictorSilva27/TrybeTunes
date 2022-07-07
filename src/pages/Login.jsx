import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';
import './css/styleLogin.css';

class Login extends React.Component {
state = {
  nameLogin: '',
  buttonLogin: true,
  loading: false,
}

onInputLogin = ({ target }) => {
  const { name, value } = target;
  this.setState({
    [name]: value,
  }, () => this.setState({
    buttonLogin: this.validInput(),
  }));
}

validInput = () => {
  const { nameLogin } = this.state;
  const minLength = 3;
  if (nameLogin.length < minLength) {
    return true;
  }
  return false;
}

changeRoute = () => {
  const { history } = this.props;
  history.push('/search');
}

onClickLogin = (event) => {
  const { nameLogin } = this.state;
  event.preventDefault();
  createUser({
    name: nameLogin,
  }).then(
    () => {
      this.changeRoute();
    },
    this.setState({ loading: true }),
  );
}

render() {
  const { buttonLogin, nameLogin, loading } = this.state;
  return (
    <section>
      {loading
        ? <Loading />
        : (
          <div data-testid="page-login" className="page-login">
            <div className="div-forms">
              <h1 className="title-login">Login</h1>
              <form className="forms-content">
                <label htmlFor="login-name-input" className="label-login">
                  Usuário
                  <input
                    type="text"
                    data-testid="login-name-input"
                    name="nameLogin"
                    value={ nameLogin }
                    onChange={ this.onInputLogin }
                  />
                </label>
                <button
                  type="submit"
                  data-testid="login-submit-button"
                  disabled={ buttonLogin }
                  onClick={ this.onClickLogin }
                >
                  Entrar
                </button>
              </form>
            </div>
          </div>
        )}
    </section>
  );
}
}

Login.propTypes = {
  buttonLogin: PropTypes.bool,
  onInputChange: PropTypes.func,
}.isRequired;

export default Login;
