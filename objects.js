var playlist = {artist: "songs"};

function updatePlaylist(playlist,"artist","songs") {
  playlist["artist"] = "songs"
  return playlist
}

function removeFromPlaylist(playlist, "artist") {
  delete playlist.artist
  return playlist
}
