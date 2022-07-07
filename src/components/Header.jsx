import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import '../pages/css/styleHeader.css';

export default class Header extends Component {
state = {
  loading: false,
  nameUser: '',
};

componentDidMount() {
  this.getNameHeader();
}

getNameHeader = async () => {
  this.setState({ loading: true });
  const response = await getUser();
  this.setState({ nameUser: response.name, loading: false });
}

render() {
  const { nameUser, loading } = this.state;
  return (
    <header data-testid="header-component" className="header-content">
      {loading ? <Loading />
        : (
          <div className="div-header">
            <div className="user-header">
              <span
                data-testid="header-user-name"
                className="span-header"
              >
                { nameUser }
              </span>
            </div>
            <div>
              <nav className="nav-header">
                <div className="link-search">
                  <Link to="/search" data-testid="link-to-search"> Search </Link>
                </div>
                <div className="link-favorite">
                  <Link to="/favorites" data-testid="link-to-favorites"> Favoritos </Link>
                </div>
                <div className="link-profile">
                  <Link to="/profile" data-testid="link-to-profile"> Perfil </Link>
                </div>
              </nav>
            </div>
          </div>)}
    </header>
  );
}
}
