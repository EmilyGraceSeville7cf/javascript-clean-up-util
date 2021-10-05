"use strict";

/**
 * Abstract logger to write logs.
 * @constructor
 */
function AbstractLogger() {
}

/**
 * Writes normal message into log stream.
 * 
 * @param path {message} Message to log.
 */
AbstractLogger.prototype.writeLog = function (message) {
}

/**
 * Writes info message into log stream.
 * 
 * @param path {message} Message to log.
 */
AbstractLogger.prototype.writeInfo = function (message) {
}

/**
 * Writes warn message into log stream.
 * 
 * @param path {message} Message to log.
 */
AbstractLogger.prototype.writeWarn = function (message) {
}

/**
 * Writes error message into log stream.
 * 
 * @param path {message} Message to log.
 */
AbstractLogger.prototype.writeError = function (message) {
}

/**
 * Writes empty line into log stream.
 */
AbstractLogger.prototype.writeLine = function () {
}

Object.freeze(AbstractLogger);
