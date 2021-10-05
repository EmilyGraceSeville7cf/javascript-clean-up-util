"use strict";

/**
 * Abstract logger to write logs.
 */
class AbstractLogger {
  /**
   * Writes normal message into log stream.
   *
   * @param {string} message Message to log.
   */
  writeLog(message) {}

  /**
   * Writes info message into log stream.
   *
   * @param {string} message Message to log.
   */
  writeInfo(message) {}

  /**
   * Writes warn message into log stream.
   *
   * @param {string} message Message to log.
   */
  writeWarn(message) {}

  /**
   * Writes error message into log stream.
   *
   * @param {string} message Message to log.
   */
  writeError(message) {}

  /**
   * Writes empty line into log stream.
   */
  writeLine() {}
}

Object.freeze(AbstractLogger);
