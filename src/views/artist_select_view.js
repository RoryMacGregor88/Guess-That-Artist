const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js');

const ArtistSelectView = function () {
  this.artistSquares = null;
};

ArtistSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Artists-ready', (evt) => {
    this.artists = evt.detail;
    const boxes = this.multiplyBoxes(6, this.artists);

    const winningBox = this.winningBox(boxes);
    const winningObject = this.findArtistObject(this.artists, winningBox);

    this.populatePicture(winningObject);

    artistH3s = document.querySelectorAll('.squares');
    for (var i = 0; i < artistH3s.length; i++) {
      artistH3s[i].addEventListener('click', function() {
        if (this.textContent == winningBox) {
          PubSub.publish('Artist-selected:win', this.textContent);
        } else {
          PubSub.publish('Artist-selected:lose', this.textContent);
        }
      });
    }
  })
  const easyButton = document.querySelector('#easy');
  easyButton.addEventListener('click', function() {
    this.difficultySetting(9);
  });
  const normalButton = document.querySelector('#normal');
  normalButton.addEventListener('click', function() {
    this.difficultySetting(6);
  });
  const hardButton = document.querySelector('#hard');
  hardButton.addEventListener('click', function() {
    this.difficultySetting(3);
  });
};

ArtistSelectView.prototype.multiplyBoxes = function (num, array) {
  const artists = [];
  for (var i = 0; i < num; i++) {
    const result = this.generateBox(array);
    artists.push(result);
  }
  return artists;
};

ArtistSelectView.prototype.winningBox = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

ArtistSelectView.prototype.generateBox = function(array) {
  const artist = array[Math.floor(Math.random() * array.length)];
  const artistId = artist.name;

  const selectBoxesDiv = document.querySelector('#artist-select-boxes');
  const artistName = document.createElement('h3');
  const artistSquare = document.createElement('div');
  artistSquare.classList.add('squares');
  artistName.textContent = artist.name;

  artistSquare.appendChild(artistName);
  selectBoxesDiv.appendChild(artistSquare);
  return artistId;
}

// ArtistSelectView.prototype.difficultySetting = function(num) {
//   this.boxes = this.multiplyBoxes(num, this.artists);
//   this.winningBox = this.winningBox(boxes);
// };

ArtistSelectView.prototype.populatePicture = function (object) {
  const artistPictureDiv = document.querySelector("#artist-picture");
  const artistPicture = document.createElement('img')
  artistPicture.src = object.image[4]['#text'];
  artistPictureDiv.appendChild(artistPicture);
};

ArtistSelectView.prototype.findArtistObject = function(array, artistName) {
  return array.find( artist => artist.name === artistName );
};

module.exports = ArtistSelectView;
