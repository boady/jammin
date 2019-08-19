import React from 'react';
import './TrackList.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist}  from '../Playlist/Playlist';
import {Track} from '../Track/Track'

const background = '#010c3f';
const fontSize = '1em';
const color = 'white';

const styles = {
  background: background,
  fontSize: fontSize,
  color: color
}

export class TrackList extends React.Component {
  createTracks() {
    return this.props.tracks.map(track => {
      return (
        <div key={track.id}>
        <Track
        onClickAdd={this.props.onClickAdd}
        track={track}
        />
        {this.props.onAdd && <button style={styles}
      onClick={event => this.props.onAdd(track)}>+</button>}
      this.props.onRemove
      &&<button style={styles} onClick={event =>this.props.onRemove(track)} >-</button>}
      </div>
      )
    })
  }
  render() {

    return (
      <div className="TrackList">
      {this.createTracks()}
      </div>
    )
  }
};
export default TrackList
