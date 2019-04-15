/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Artist = __webpack_require__(/*! ./models/artist.js */ \"./src/models/artist.js\");\nconst ArtistSelectView = __webpack_require__(/*! ./views/artist_select_view.js */ \"./src/views/artist_select_view.js\");\nconst MessageView = __webpack_require__(/*! ./views/message_view.js */ \"./src/views/message_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // const activity = new Artist();\n  // activity.bindEvents();\n\n  const artistSelectDiv = document.querySelector('div#artist-picture');\n  const artistSelectDivView = new ArtistSelectView(artistSelectDiv);\n  artistSelectDivView.bindEvents();\n\n  const messageContainer = document.querySelector('#message');\n  const messageView = new MessageView(messageContainer);\n  messageView.bindEvents();\n\n  const artist = new Artist();\n  artist.bindEvents();\n  artist.getData();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function () {\n  return fetch(this.url)\n    .then(res => res.json());\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/artist.js":
/*!******************************!*\
  !*** ./src/models/artist.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\n\nconst Artist = function () {\n  this.artists = null;\n};\n\nArtist.prototype.bindEvents = function() {\n  PubSub.subscribe('Artist-selected:win', (evt) => {\n    correctArtistName = evt.detail;\n    correctArtistObject = this.findArtistObject(this.artists, correctArtistName);\n    PubSub.publish('Correct-artist-object', correctArtistObject);\n  })\n  PubSub.subscribe('Artist-selected:lose', (evt) => {\n    const incorrectArtistName = evt.detail;\n    PubSub.publish('Incorrect-artist-object', incorrectArtistName);\n  })\n};\n\nArtist.prototype.getData = function () {\n  const requestHelper = new RequestHelper('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=53d69415026ccf4c3c8e87f9a304cc49&format=json&limit=1000');\n  requestHelper.get()\n    .then( (data) => {\n      this.artists = data.artists.artist;\n      PubSub.publish('Artists-ready', this.artists);\n    })\n};\n\nArtist.prototype.findArtistObject = function(array, artistName) {\n  return array.find( artist => artist.name === artistName );\n};\n\nmodule.exports = Artist;\n\n\n//# sourceURL=webpack:///./src/models/artist.js?");

/***/ }),

/***/ "./src/views/artist_select_view.js":
/*!*****************************************!*\
  !*** ./src/views/artist_select_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\n\nconst ArtistSelectView = function () {\n  this.artistSquares = null;\n};\n\nArtistSelectView.prototype.bindEvents = function () {\n  PubSub.subscribe('Artists-ready', (evt) => {\n    this.artists = evt.detail;\n    const boxes = this.multiplyBoxes(6, this.artists);\n\n    const winningBox = this.winningBox(boxes);\n    const winningObject = this.findArtistObject(this.artists, winningBox);\n\n    this.populatePicture(winningObject);\n\n    artistH3s = document.querySelectorAll('.squares');\n    for (var i = 0; i < artistH3s.length; i++) {\n      artistH3s[i].addEventListener('click', function() {\n        if (this.textContent == winningBox) {\n          PubSub.publish('Artist-selected:win', this.textContent);\n        } else {\n          PubSub.publish('Artist-selected:lose', this.textContent);\n        }\n      });\n    }\n  })\n  const easyButton = document.querySelector('#easy');\n  easyButton.addEventListener('click', function() {\n    this.difficultySetting(9);\n  });\n  const normalButton = document.querySelector('#normal');\n  normalButton.addEventListener('click', function() {\n    this.difficultySetting(6);\n  });\n  const hardButton = document.querySelector('#hard');\n  hardButton.addEventListener('click', function() {\n    this.difficultySetting(3);\n  });\n};\n\nArtistSelectView.prototype.multiplyBoxes = function (num, array) {\n  const artists = [];\n  for (var i = 0; i < num; i++) {\n    const result = this.generateBox(array);\n    artists.push(result);\n  }\n  return artists;\n};\n\nArtistSelectView.prototype.winningBox = function(array) {\n  return array[Math.floor(Math.random() * array.length)];\n}\n\nArtistSelectView.prototype.generateBox = function(array) {\n  const artist = array[Math.floor(Math.random() * array.length)];\n  const artistId = artist.name;\n\n  const selectBoxesDiv = document.querySelector('#artist-select-boxes');\n  const artistName = document.createElement('h3');\n  const artistSquare = document.createElement('div');\n  artistSquare.classList.add('squares');\n  artistName.textContent = artist.name;\n\n  artistSquare.appendChild(artistName);\n  selectBoxesDiv.appendChild(artistSquare);\n  return artistId;\n}\n\n// ArtistSelectView.prototype.difficultySetting = function(num) {\n//   this.boxes = this.multiplyBoxes(num, this.artists);\n//   this.winningBox = this.winningBox(boxes);\n// };\n\nArtistSelectView.prototype.populatePicture = function (object) {\n  const artistPictureDiv = document.querySelector(\"#artist-picture\");\n  const artistPicture = document.createElement('img')\n  artistPicture.src = object.image[4]['#text'];\n  artistPictureDiv.appendChild(artistPicture);\n};\n\nArtistSelectView.prototype.findArtistObject = function(array, artistName) {\n  return array.find( artist => artist.name === artistName );\n};\n\nmodule.exports = ArtistSelectView;\n\n\n//# sourceURL=webpack:///./src/views/artist_select_view.js?");

/***/ }),

/***/ "./src/views/message_view.js":
/*!***********************************!*\
  !*** ./src/views/message_view.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\n\nconst MessageView = function (container) {\n  this.container = container;\n};\n\nMessageView.prototype.bindEvents = function () {\n  PubSub.subscribe('Correct-artist-object', (evt) => {\n   correctArtist = evt.detail;\n   this.renderCorrect(correctArtist);\n })\n  PubSub.subscribe('Incorrect-artist-object', (evt) => {\n   const incorrectArtist = evt.detail;\n    this.renderIncorrect(incorrectArtist);\n  })\n};\n\nMessageView.prototype.renderCorrect = function(artist) {\n    const displayDiv = document.querySelector('#display');\n\n    const paragraph = document.createElement('p');\n    paragraph.classList.add('paragraph');\n    paragraph.textContent = `You guessed right! It's ${artist.name}.`;\n\n    displayDiv.innerHTML = '';\n    displayDiv.appendChild(paragraph);\n  };\n\nMessageView.prototype.renderIncorrect = function(artist) {\n    const displayDiv = document.querySelector('#display');\n\n    const paragraph = document.createElement('p');\n    paragraph.classList.add('paragraph');\n    paragraph.textContent = this.randomMessage(artist);\n\n    displayDiv.innerHTML = '';\n    displayDiv.appendChild(paragraph);\n  };\n\nMessageView.prototype.randomMessage = function(artist) {\n  messages = [\n    \"Well...that was a shite guess.\",\n    \"You're shit at this.\",\n    \"Omg, it's sooo obvious!\",\n    `It's cleary not ${artist}.`,\n    \"Did you even look at the picture before clicking?\",\n    \"That's it, you're uninvited from the quiz this week.\",\n    \"Seriously? That one was easy!\",\n    \"I could do better blindfolded.\",\n    `Have you ever even seen ${artist}?`,\n    \"I hope your code's better than your music knowledge.\",\n    \"I can't believe you didn't know that one...\",\n    \"You can't do anything right, can you?\",\n    `Fuck sake, ${artist}? Come on...`,\n    `You seriously think that's ${artist}?`,\n    `Oh yeah, because that looks just like ${artist}.`\n  ];\n  return messages[Math.floor(Math.random() * messages.length)];\n};\n\nmodule.exports = MessageView;\n\n\n//# sourceURL=webpack:///./src/views/message_view.js?");

/***/ })

/******/ });