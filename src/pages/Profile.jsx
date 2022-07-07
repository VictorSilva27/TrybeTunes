import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  state = {
    loading: false,
    infoPeople: [],
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    this.setState({ loading: true });
    const result = await getUser();
    this.setState({ loading: false, infoPeople: result });
  }

  render() {
    const { infoPeople, loading } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        { loading && <Loading /> }
        <h1>Profile</h1>
        <img
          src={ infoPeople.image }
          alt={ infoPeople.name }
          data-testid="profile-image"
        />
        <p>{ infoPeople.name }</p>
        <p>{ infoPeople.email }</p>
        <p>{ infoPeople.description }</p>

        <Link to="/profile/edit">
          <p>Editar perfil</p>
        </Link>
      </div>
    );
  }
}

export default Profile;
