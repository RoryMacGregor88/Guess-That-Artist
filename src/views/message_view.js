const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js');

const MessageView = function (container) {
  this.container = container;
};

MessageView.prototype.bindEvents = function () {
  PubSub.subscribe('Correct-artist-object', (evt) => {
   correctArtist = evt.detail;
   this.renderCorrect(correctArtist);
 })
  PubSub.subscribe('Incorrect-artist-object', (evt) => {
   const correctArtist = evt.detail;
    this.renderIncorrect(correctArtist);
  })
};

MessageView.prototype.renderCorrect = function(artist) {
    const displayDiv = document.querySelector('#display');

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = `You guessed right! Correct artist is ${artist}.`;

    displayDiv.innerHTML = '';
    displayDiv.appendChild(paragraph);
  };

MessageView.prototype.renderIncorrect = function(artist) {
    const displayDiv = document.querySelector('#display');

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = `You guessed wrong...the correct artist was ${artist}.`;

    displayDiv.innerHTML = '';
    displayDiv.appendChild(paragraph);
  };

module.exports = MessageView;
