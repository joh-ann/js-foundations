function createCollection(name, description, tracks) {
  var collection = {
    name: name,
    description: description,
    tracks: tracks || []
  }
  return collection
}

function createTrack(title, artist, duration) {
  var track = {
    title: title || 'unknown',
    artist: artist || 'unknown',
    duration: duration || 0
  }
  return track
}

function reviewTrack(trackObj) {
  if (trackObj.artist === 'Red Hot Chili Peppers') {
    return `The song ${trackObj.title} rules!`
  }
  return `I wish this was a Red Hot Chili Peppers song.`
}

function addTrack(hitsObj, trackObj) {
  hitsObj.tracks.push(trackObj)
  return hitsObj
}

function getTotalDuration(hitsObj) {
  var duration = 0
  for (var i = 0; i < hitsObj.tracks.length; i++) {
    duration += hitsObj.tracks[i].duration
  }
  return duration
}

function findTracksByArtist(hitsObj, artist) {
  var artistTracks = []
  for (var i = 0; i < hitsObj.tracks.length; i++) {
    if (hitsObj.tracks[i].artist === artist) {
      artistTracks.push(hitsObj.tracks[i])
    }
  }
  return artistTracks
}

module.exports = {
  createCollection,
  createTrack,
  reviewTrack,
  addTrack,
  getTotalDuration,
  findTracksByArtist
}