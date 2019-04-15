const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js');

const Artist = function () {

};

Artist.prototype.bindEvents = function() {
  PubSub.subscribe('Artist-selected:win', (evt) => {
    correctArtistName = evt.detail;
    // this.correctArtistObject = this.findArtistObject(this.artists, correctArtistName);
    PubSub.publish('Correct-artist-object', correctArtistName);
  })
  PubSub.subscribe('Artist-selected:lose', (evt) => {
    const incorrectArtistName = evt.detail;
    PubSub.publish('Incorrect-artist-object', correctArtistName);
  })
};

Artist.prototype.getData = function () {
  const requestHelper = new RequestHelper('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=53d69415026ccf4c3c8e87f9a304cc49&format=json');
  requestHelper.get()
    .then( (data) => {
      this.artists = data.artists.artist;
      PubSub.publish('Artists-ready', this.artists);
    })
};

Artist.prototype.findArtistObject = function(array, artistName) {
  return array.find( artist => artist.textContent === artistName );
};

module.exports = Artist;
