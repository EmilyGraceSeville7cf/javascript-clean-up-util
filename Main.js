/*
  Sample clean-up-config.json: https://drive.google.com/file/d/1QTkxwH2A4tzMW3zHk4s-IKSpcwmTZ9Pi/view?usp=sharing.

  - Every config key is folder name to be created when there is no another folder in the current directory.
  - Every config value is "*" when there is no need to traverse folders any more.
  - Every config value is object that follows the same rules when it is needed to traverse folders down.
*/

"use strict";

function main() {
  let logger = customloggerslib.newTextLogger("0AJJhQCu2pGhAUk9PVA", "clean-up-log.log");

  try {
    logger.writeInfo("Checking config...");
    let creator = new FolderCreator("clean-up-config.json", logger);
    logger.writeInfo("Config is correct.");
    creator.CreateMissingFolders();
  }
  catch (e) {
    logger.writeError(`${e.message}\n`);
  }
  logger.writeLine();
}
