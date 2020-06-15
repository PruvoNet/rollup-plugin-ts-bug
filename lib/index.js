'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var events = require('events');

class T extends events.EventEmitter {
}
const main = (emitter) => {
    return emitter.getMaxListeners();
};

exports.T = T;
exports.main = main;
