"use strict";

/**
 * Logger to write logs to console.
 * @constructor
 */
function ConsoleLogger() {
}

ConsoleLogger.prototype = Object.create(AbstractLogger.prototype);

/**
 * Writes normal message into log stream.
 * 
 * @param path {message} Message to log.
 */
ConsoleLogger.prototype.writeLog = function (message) {
  console.log(message);
}

/**
 * Writes info message into log stream.
 * 
 * @param path {message} Message to log.
 */
ConsoleLogger.prototype.writeInfo = function (message) {
  console.info(message);
}

/**
 * Writes warn message into log stream.
 * 
 * @param path {message} Message to log.
 */
ConsoleLogger.prototype.writeWarn = function (message) {
  console.warn(message);
}

/**
 * Writes error message into log stream.
 * 
 * @param path {message} Message to log.
 */
ConsoleLogger.prototype.writeError = function (message) {
  console.error(message);
}

Object.defineProperty(ConsoleLogger.prototype, 'constructor', {
  value: ConsoleLogger,
  writable: true
});

Object.freeze(ConsoleLogger);
