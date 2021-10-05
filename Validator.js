"use strict";

/**
 * Validator to check .json config correctness.
 */
class Validator {
  /**
   * Creates validator to check .json config correctness.
   * 
   * @param {string} path Config name with extension.
   * @param {string} [logger=ConsoleLogger] Logger to log all info.
   */
  constructor (path, logger = new ConsoleLogger()) {
    if (path === undefined)
      throw new Error(`"path" parameter must be defined.`);
    
    this.__logger = logger;
    
    const root = DriveApp.getRootFolder();
    let iterator = root.getFilesByName(path);
    if (!iterator.hasNext())
      throw new Error(`Config "${path}" not found in the root folder.`);
    
    /**
     * Config content.
     */
    this.config = iterator.next().getBlob().getDataAsString();
    if (iterator.hasNext())
      throw new Error(`Multiple "${path}" configs found in the root folder.`);
  }

  /**
   * Checks .json config correctness.
   * 
   * @returns {boolean} True if config is correct and false otherwise.
   */
  IsValid() {
    let shema = {
      "$schema": "http://json-schema.org/draft-07/schema#",
      
      type: "object",
      patternProperties: {
        "^[a-zA-Z0-9_-]+$": {
          oneOf: [
            {
              type: "string",
              pattern: "^[*]$"
            },
            {
              type: "object",
              "$ref": "#"
            },
          ]
        }
      },
      additionalProperties: false
    }

    let data = {
      "schema": shema,
      "json": JSON.parse(this.config)
    }

    var options = {
      method: "post",
      contentType: "application/json",
      muteHttpExceptions: true,
      payload: JSON.stringify(data)
    };

    let responce = UrlFetchApp.fetch("https://assertible.com/json", options);
    return responce.getResponseCode() === 200;
  }
}

Object.freeze(Validator);
