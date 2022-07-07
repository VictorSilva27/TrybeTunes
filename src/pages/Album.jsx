import React from 'react';
import PropType from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import '../pages/css/styleMusicCard.css';
import '../pages/css/styleAlbum.css';

class Album extends React.Component {
state = {
  nameGroup: '',
  nameCollection: '',
  imageCollection: '',
  musics: [],
}

componentDidMount() {
  this.setMusic();
}

setMusic = async () => {
  const { match: { params: { id } } } = this.props;
  const response = await getMusics(id);
  this.setState({
    nameGroup: response[0].artistName,
    nameCollection: response[0].collectionName,
    imageCollection: response[0].artworkUrl100,
    musics: response.filter(({ kind }) => kind === 'song'),
  });
}

render() {
  const { nameGroup, nameCollection, musics, imageCollection } = this.state;
  return (
    <div data-testid="page-album">
      <Header />
      <h1 className="title-album">Álbum</h1>
      <div className="content-dad-album">
        <div className="content-album">
          <div className="album-artist">

            <p data-testid="album-name" className='album-name'>
              {nameCollection}
            </p>

            <p data-testid="artist-name">
              {nameGroup}
            </p>

          </div>
          <img src={imageCollection} alt={`Álbum ${nameCollection}`} />
        </div>
      </div>
      <div className='page-track'>
        {musics.map((music) => (<MusicCard key={music.trackId} music={music} />))}
      </div>
    </div>
  );
}
}

Album.propTypes = {
  id: PropType.string,
}.isRequired;

export default Album;
