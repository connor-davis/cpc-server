#!/usr/bin/env node
let yargs = require('yargs');
let envPaths = require('env-paths');

function runOptions(yargs) {
  return yargs.option('port', {
    describe: 'The port to run the server on (HYPE)',
    default: 4973,
  });
}

async function runServer(args) {
  let { create } = require('.');

  let { close } = await create(args);

  process.on('SIGINT', async () => {
    try {
      await close();
    } catch (e) {
      console.error('Unable to close gracefully');
      console.error(e);
      process.exit(1);
    }
  });
}

yargs
  .scriptName('cpc-server')
  .showHelpOnFail(true)
  .demandCommand()
  .command('run', 'Run the server', runOptions, runServer)
  .help()
  .parse(process.argv.slice(2));
