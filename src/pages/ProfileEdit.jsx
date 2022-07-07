import React from 'react';
import PropType from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
state = {
  loading: false,
  nameEdit: '',
  emailEdit: '',
  imageEdit: '',
  descriptionEdit: '',
  buttonEdit: true,
}

componentDidMount = () => {
  this.fetchUser();
}

fetchUser = async () => {
  this.setState({ loading: true });
  const result = await getUser();
  this.setState({ loading: false });
  this.setState({
    nameEdit: result.name,
    emailEdit: result.email,
    descriptionEdit: result.description,
    imageEdit: result.image,
  });
}

onInputEdit = ({ target }) => {
  const { name, value } = target;
  this.setState({
    [name]: value,
  }, () => this.setState({
    buttonEdit: this.validInput(),
  }));
}

validInput = () => {
  const { nameEdit, emailEdit, imageEdit, descriptionEdit } = this.state;
  const minLength = 0;
  if (nameEdit.length === minLength
        || emailEdit.length === minLength
        || imageEdit.length === minLength
        || descriptionEdit.length === minLength) {
    return true;
  }
  return false;
}

setInfoEdit = async (event) => {
  event.preventDefault();
  const { nameEdit, emailEdit, imageEdit, descriptionEdit } = this.state;
  const infoPersonal = {
    name: nameEdit,
    email: emailEdit,
    image: imageEdit,
    description: descriptionEdit,
  };
  const { history } = this.props;
  this.setState({ loading: true });
  await updateUser(infoPersonal);
  history.push('/profile');
}

render() {
  const { loading,
    nameEdit,
    emailEdit, imageEdit, descriptionEdit, buttonEdit } = this.state;
  return (
    <div data-testid="page-profile-edit">
      { loading && <Loading /> }
      <Header />
      <h1>Profile Edit</h1>
      <form>
        <label htmlFor="nameEdit">
          Nome:
          <input
            type="text"
            value={ nameEdit }
            name="nameEdit"
            data-testid="edit-input-name"
            onChange={ this.onInputEdit }
          />
        </label>

        <label htmlFor="emailEdit">
          E-mail:
          <input
            type="text"
            value={ emailEdit }
            name="emailEdit"
            data-testid="edit-input-email"
            onChange={ this.onInputEdit }
          />
        </label>

        <label htmlFor="descriptionEdit">
          Desc:
          <input
            type="text"
            value={ descriptionEdit }
            name="descriptionEdit"
            data-testid="edit-input-description"
            onChange={ this.onInputEdit }
          />
        </label>

        <label htmlFor="imageEdit">
          Url Image:
          <input
            type="text"
            name="imageEdit"
            value={ imageEdit }
            data-testid="edit-input-image"
            onChange={ this.onInputEdit }
          />
        </label>

        <button
          type="submit"
          disabled={ buttonEdit }
          data-testid="edit-button-save"
          onClick={ this.setInfoEdit }
        >
          Editar perfil
        </button>
      </form>
    </div>
  );
}
}

ProfileEdit.propTypes = {
  history: PropType.object,
}.isRequired;

export default ProfileEdit;
