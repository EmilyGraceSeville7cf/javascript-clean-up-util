"use strict";

/**
 * Logger to write logs to .log files.
 */
class TextLogger extends AbstractLogger {
  /**
   * Creates logger to write logs to .log files.
   * 
   * @param {string} folder  Folder id where create .log file.
   * @param {string} file File name write logs to.
   */
  constructor (folder, file) {
    super();

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

  /**
   * Writes normal message into log stream.
   *
   * @param {message} message Message to log.
   */
  writeLog(message) {
    this.file.setContent(`${this.file.getBlob().getDataAsString()}\n[log] ${__currentDate()}: ${message}`);
  }

  /**
   * Writes info message into log stream.
   *
   * @param {message} message Message to log.
   */
  writeInfo(message) {
    this.file.setContent(`${this.file.getBlob().getDataAsString()}\n[info] ${__currentDate()}: ${message}`);
  }

  /**
   * Writes warn message into log stream.
   *
   * @param {message} message Message to log.
   */
  writeWarn(message) {
    this.file.setContent(`${this.file.getBlob().getDataAsString()}\n[warn] ${__currentDate()}: ${message}`);
  }

  /**
   * Writes error message into log stream.
   *
   * @param {message} message Message to log.
   */
  writeError(message) {
    this.file.setContent(`${this.file.getBlob().getDataAsString()}\n[error] ${__currentDate()}: ${message}`);
  }

  /**
   * Writes empty line into log stream.
   */
  writeLine() {
    this.file.setContent(`${this.file.getBlob().getDataAsString()}\n`);
  }
}

Object.freeze(TextLogger);
