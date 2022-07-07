import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
state = {
  loading: false,
  checked: 'favorito',
  musicFavorite: [],
}

componentDidMount() {
  this.getMusicFavorite();
}

getMusicFavorite = async () => {
  this.setState({ loading: true });
  const response = await getFavoriteSongs();
  this.setState({ loading: false, musicFavorite: response });
}

render() {
  const { musicFavorite, loading, checked } = this.state;
  return (
    <div data-testid="page-favorites">
      <Header />
      <h1>Favorites</h1>
      {loading && <Loading />}

      <div className="page-track">
      {
        musicFavorite.map((track) => (<MusicCard
          key={ track.trackId }
          music={ track }
          check={ checked }
          />))
        }
      </div>
    </div>
  );
}
}

export default Favorites;
