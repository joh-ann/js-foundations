function createSong(name, artist, favorite) {
  var song = {
    name: name,
    artist: artist,
    favorite: favorite || false,
    hasBeenPlayed: false
  }
  return song
}

function playSong(songObj) {
  songObj.hasBeenPlayed = true
  return songObj
}

function makePlaylist(name, songs) {
  var playlist = {
    name: name,
    songs: songs
  }
  return playlist
}

function addSongToPlaylist(playlistObj, songObj) {
  playlistObj.songs.push(songObj)
  return playlistObj
}

function playSongs(playlistObj, favorites) {
  for (var i = 0; i < playlistObj.songs.length; i++) {
    if (favorites) {
      if (playlistObj.songs[i].favorite === true) {
        playlistObj.songs[i].hasBeenPlayed = true;
      } else {
        playlistObj.songs[i].hasBeenPlayed = false;
      }
    } else {
      playlistObj.songs[i].hasBeenPlayed = true;
    }
  }
  return playlistObj;
}

// function playSongs(playlistObj, favorites) {
//   playlistObj.songs.forEach(song => {
//     if (favorites) {
//       song.hasBeenPlayed = song.favorite === true;
//     } else {
//       song.hasBeenPlayed = true;
//     }
//   });

//   return playlistObj;
// }




module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
