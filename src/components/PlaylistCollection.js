import React, {useState} from 'react'
import Playlist from './Playlist'

const PlaylistCollection = (props) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)


  let playListTiles = props.playlists.map(playlist => {
    const setSelectedPlaylistId = () => {
      return(
        setSelectedPlaylist(playlist.id)
      )
    }
    
    let selectedClass = ""
    if (selectedPlaylist === playlist.id) {
      selectedClass = "selected"
    }
    return(
      <Playlist
        key = {playlist.id}
        name = {playlist.name}
        selected = {selectedClass}
        handlePlaylistClick = {setSelectedPlaylistId}
      
      />
    )

  })

  return(
    <div>
      <h1>Playlists</h1>
      {playListTiles}    
    </div>

  )
}





export default PlaylistCollection