import React from 'react'


const Playlist = (props) => {
  return(
    <div className = {props.selected} onClick = {props.handlePlaylistClick}>
    <h3>{props.name}</h3>
    </div>
  )
}

export default Playlist