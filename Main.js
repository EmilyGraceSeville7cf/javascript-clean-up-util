/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
'use strict';

function main() {
  const logger = customloggerslib.newTextLogger('0AJJhQCu2pGhAUk9PVA',
      'clean-up-log.log');

  try {
    logger.writeInfo('Checking config...');
    const creator = new FolderCreator('clean-up-config.json', logger);
    logger.writeInfo('Config is correct.');
    creator.createMissingFolders();
  } catch (e) {
    logger.writeError(`${e.message}\n`);
  }
  logger.writeLine();
}
