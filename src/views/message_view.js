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
   const incorrectArtist = evt.detail;
    this.renderIncorrect(incorrectArtist);
  })
};

MessageView.prototype.renderCorrect = function(artist) {
    const displayDiv = document.querySelector('#display');

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = `You guessed right! It's ${artist.name}.`;

    displayDiv.innerHTML = '';
    displayDiv.appendChild(paragraph);
  };

MessageView.prototype.renderIncorrect = function(artist) {
    const displayDiv = document.querySelector('#display');

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = this.randomMessage(artist);

    displayDiv.innerHTML = '';
    displayDiv.appendChild(paragraph);
  };

MessageView.prototype.randomMessage = function(artist) {
  messages = [
    "Well...that was a shite guess.",
    "You're shit at this.",
    "Omg, it's sooo obvious!",
    `It's cleary not ${artist}.`,
    "Did you even look at the picture before clicking?",
    "That's it, you're uninvited from the quiz this week.",
    "Seriously? That one was easy!",
    "I could do better blindfolded.",
    `Have you ever even seen ${artist}?`,
    "I hope your code's better than your music knowledge.",
    "I can't believe you didn't know that one...",
    "You can't do anything right, can you?",
    `Fuck sake, ${artist}? Come on...`,
    `You seriously think that's ${artist}?`,
    `Oh yeah, because that looks just like ${artist}.`
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

module.exports = MessageView;
