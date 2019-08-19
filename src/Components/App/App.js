import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist}  from '../Playlist/Playlist';
import Spotify from '../../util/spotify.js'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      query: '',
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: [],
      track: []
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.onChangeQuery = this.onChangeQuery.bind(this)
    Spotify.getAccessToken()
  }

  search(term) {
    Spotify.search(term)
    .then(response => this.setState({ searchResults: response }))
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks
    tracks.push(track)
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks
    tracks = tracks.filter(current => current.id !== track.id)
    this.setState({ playlistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() {
    let TrackURIs = this.state.playlistTracks.map(track => track.uri)
    //let Spotify = Spotify.savePlaylist(this.state.playlistName, trackURIs)
    this.setState({ playlistName: 'New Playlist', playlistTracks: [] })
    this.setState({ query: '',
  searchResults: []
})
  }

  onChangeQuery(query) {
    this.setState({
      query,
    })
  }
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar
    query={this.state.query}
    onChange={this.onChangeQuery}
    onSearch={this.search}/>
    <div className="App-playlist">
      <SearchResults
      searchResults={this.state.searchResults}
      onAdd={this.addTrack}
      onRemove={this.removeTrack}/>
      <Playlist
      playlistName={this.state.playlistName}
      tracks={this.state.playlistTracks}
      onAdd={this.addTrack}
      onRemove={this.removeTrack}
      onNameChange={this.updatePlaylistName}
      onSave={this.savePlaylist}/>
    </div>
  </div>
</div>
    )
  }
};
