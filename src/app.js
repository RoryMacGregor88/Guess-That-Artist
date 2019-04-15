const Artist = require('./models/artist.js');
const ArtistSelectView = require('./views/artist_select_view.js');
const MessageView = require('./views/message_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // const activity = new Artist();
  // activity.bindEvents();

  const artistSelectDiv = document.querySelector('div#artist-picture');
  const artistSelectDivView = new ArtistSelectView(artistSelectDiv);
  artistSelectDivView.bindEvents();

  const messageContainer = document.querySelector('#message');
  const messageView = new MessageView(messageContainer);
  messageView.bindEvents();

  const artist = new Artist();
  artist.bindEvents();
  artist.getData();
});
