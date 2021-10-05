"use strict";

/**
 * Logger to write logs to console.
 */
class ConsoleLogger extends AbstractLogger {
  /**
   * Writes normal message into log stream.
   *
   * @param {string} message Message to log.
   */
  writeLog(message) {
    console.log(message);
  }

  /**
   * Writes info message into log stream.
   *
   * @param {string} message Message to log.
   */
  writeInfo(message) {
    console.info(message);
  }

  /**
   * Writes warn message into log stream.
   *
   * @param {string} message Message to log.
   */
  writeWarn(message) {
    console.warn(message);
  }

  /**
   * Writes error message into log stream.
   *
   * @param {string} message Message to log.
   */
  writeError(message) {
    console.error(message);
  }

  /**
   * Writes empty line into log stream.
   */
  writeLine() {
  }
}

Object.freeze(ConsoleLogger);
