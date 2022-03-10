#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import hello from './lib/hello.mjs';

// invocation example: http://yargs.js.org/
yargs(hideBin(process.argv))
  .scriptName("star-wars-parser")
  .usage('$0 <cmd> [args]')
  .command(
    hello.cmd,
    hello.desc,
    hello.builder,
    hello.handler
  )
  .help()
  .argv
