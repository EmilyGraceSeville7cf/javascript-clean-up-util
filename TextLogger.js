"use strict";

/**
 * Logger to write logs to .log files.
 * @constructor
 * 
 * @param folder {string} Folder id where create .log file.
 * @param file {string} File name write logs to.
 */
function TextLogger(folder, file) {
  AbstractLogger.call(this);

  /**
   * Folder.
   */
  this.folder = DriveApp.getFolderById(folder);

  /**
   * File.
   */
  this.file = null;

  let iterator = this.folder.getFilesByName(file);
  if (!iterator.hasNext())
    this.file = this.folder.createFile(file, "");
  else
    this.file = iterator.next();
}

TextLogger.prototype = Object.create(AbstractLogger.prototype);

/**
 * Writes normal message into log stream.
 * 
 * @param path {message} Message to log.
 */
TextLogger.prototype.writeLog = function (message) {
  this.file.setContent(`${this.file.getBlob().getDataAsString()}\n[log] ${__currentDate()}: ${message}`);
}

/**
 * Writes info message into log stream.
 * 
 * @param path {message} Message to log.
 */
TextLogger.prototype.writeInfo = function (message) {
  this.file.setContent(`${this.file.getBlob().getDataAsString()}\n[info] ${__currentDate()}: ${message}`);
}

/**
 * Writes warn message into log stream.
 * 
 * @param path {message} Message to log.
 */
TextLogger.prototype.writeWarn = function (message) {
  this.file.setContent(`${this.file.getBlob().getDataAsString()}\n[warn] ${__currentDate()}: ${message}`);
}

/**
 * Writes error message into log stream.
 * 
 * @param path {message} Message to log.
 */
TextLogger.prototype.writeError = function (message) {
  this.file.setContent(`${this.file.getBlob().getDataAsString()}\n[error] ${__currentDate()}: ${message}`);
}

/**
 * Writes empty line into log stream.
 */
TextLogger.prototype.writeLine = function () {
  this.file.setContent(`${this.file.getBlob().getDataAsString()}\n`);
}

Object.defineProperty(TextLogger.prototype, 'constructor', {
  value: TextLogger,
  writable: true
});

Object.freeze(TextLogger);
