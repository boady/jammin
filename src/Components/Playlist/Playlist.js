import React from 'react';
import PropTypes from 'prop-types'
import './Playlist.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import TrackList from '../TrackList/TrackList'

export class Playlist extends React.Component {
  static propTypes = {
    onNameChange: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)

  }

  render() {
    return (<div className="Playlist">
  <input value={this.props.playlistName} onChange={this.handleNameChange}/>
  <TrackList
  onRemove ={this.props.onRemove}
  tracks={this.props.tracks} />
  <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
</div>
    )
  }
};
export default Playlist
