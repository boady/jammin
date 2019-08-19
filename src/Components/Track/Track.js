import React from 'react';
import './Track.css';
const isRemoval = true

export class Track extends React.Component {
  render() {
    return (<div className="Track">
    <div className="Track-information">
    <h3>{this.props.track.name} Hello </h3>
    <p>{this.props.track.artist} Hello | {this.props.track.album}</p>
    </div>
    {isRemoval ? <button>-</button> :<button>+</button>}
    <button className="Track-action"></button>
    </div>
  )}}

  export default Track
