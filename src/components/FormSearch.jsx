import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

export default class FormSearch extends Component {
  state = {
    inputSearch: '',
    buttonSearch: true,
    loading: false,
    saveInput: '',
    saveSearch: [],
  }

  setNameAlbums = async (event) => {
    event.preventDefault();
    const { inputSearch } = this.state;
    this.setState({ loading: true });
    const response = await searchAlbumsAPI(inputSearch);
    this.setState({
      saveInput: inputSearch,
      saveSearch: response,
      loading: false,
    },
    () => this.setState({
      inputSearch: '',
    }));
  }

  onInputSearch = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.setState({
      buttonSearch: this.validInput(),
    }));
  }

  validInput = () => {
    const { inputSearch } = this.state;
    const minLength = 2;
    if (inputSearch.length < minLength) {
      return true;
    }
    return false;
  }

  render() {
    const { buttonSearch, inputSearch, loading, saveInput, saveSearch } = this.state;
    return (
      <div className="page-search">
            <div>
                {loading && <Loading /> }
              <form name="forms" className="search-forms-content">
                <label htmlFor="search-artist-input" className="label-search">
                  Digite o nome da banda/cantor 
                  <input
                    type="text"
                    data-testid="search-artist-input"
                    name="inputSearch"
                    value={ inputSearch }
                    onChange={ this.onInputSearch }
                  />
                </label>
                <button
                  type="submit"
                  data-testid="search-artist-button"
                  disabled={ buttonSearch }
                  onClick={ this.setNameAlbums }
                >
                  Pesquisar
                </button>
                </form>
                <h2 className="title-search">
                {saveInput && `Resultado de álbuns de: ${saveInput}`}
              </h2>
              <div className="result-search">
                {saveSearch.length === 0
                  ? <h2 className="title-search-notfound">Nenhum álbum foi encontrado</h2>
                  : saveSearch.map((album) => (
                    <div
                      key={ album.collectionId }
                      className="collection-content"
                    >
                      <div className="flex-collection">
                      <Link
                        to={ `/album/${album.collectionId}` }
                        data-testid={ `link-to-album-${album.collectionId}` }
                      >
                        <div>
                          <img
                            src={ album.artworkUrl100 }
                            alt={ `Álbum ${album.collectionName}` }
                          />
                        </div>
                        <p className="collection-name">
                          { album.collectionName }
                        </p>
                        <p className="collection-artist">
                          { album.artistName }
                        </p>
                      </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
      </div>
    );
  }
}
