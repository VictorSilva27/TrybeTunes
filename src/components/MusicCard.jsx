import React, { Component } from 'react';
import PropType from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';
import '../pages/css/styleMusicCard.css';

class MusicCard extends Component {
  state = {
    loading: false,
    checked: false,
    musicFavorite: false,
  }

  componentDidMount() {
    this.getMusicFavorite();
  }

  setRemoveMusic = async () => {
    this.setState({ loading: true });
    const { music } = this.props;
    await removeSong(music);
    this.setState({ loading: false });
  }

  getMusicFavorite = async () => {
    this.setState({ loading: true });
    const { music } = this.props;
    const response = await getFavoriteSongs();
    this.setState({ loading: false });
    const result = response.some((track) => track.trackId === music.trackId);
    if (result) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  }

  setMusic = async (music) => {
    this.setState({ loading: true });
    await addSong(music);
    this.setState({ loading: false });
  }

  setAddFavotite = () => {
    const { music, check } = this.props;
    const { checked } = this.state;
    if (check === 'favorito') {
      this.setRemoveMusic();
      this.setState({ musicFavorite: true });
    } else if (checked) {
      this.setRemoveMusic();
      this.setState({ checked: false });
    } else {
      this.setState({
        checked: true,
      });
      this.setMusic(music);
    }
  }

  render() {
    const { music } = this.props;
    const { loading, checked, musicFavorite } = this.state;
    return (
      <div className="component-music">
        {loading && <Loading />}
        {musicFavorite ? null
          : (
            <div className="track-content">
              <p className="track-name">{music.trackName}</p>
              <audio data-testid="audio-component" className="audio-track" src={music.previewUrl} controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                {' '}
                <code>audio</code>
                .
              </audio>
                <label htmlFor="favorita" className="favorite-track" >
                  Favorita
                  <input
                    data-testid={`checkbox-music-${music.trackId}`}
                    type="checkbox"
                    name="favorita"
                    id="favorita"
                    checked={checked}
                    onChange={this.setAddFavotite}
                  />
                </label>
            </div>
          )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropType.object,
}.isRequired;

export default MusicCard;
