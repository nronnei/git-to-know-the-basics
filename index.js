#!/usr/bin/env node

require('yargs')
  .scriptName("star-wars-parser")
  .usage('$0 <cmd> [args]')
  // invocation example: http://yargs.js.org/
  .command('hello [name]', 'welcome [name] to Tatooine', (yargs) => {
    yargs.positional('name', {
      type: 'string',
      default: 'Luke Skywalker',
      describe: 'the name to say hello to'
    })
  }, function (argv) {
    console.log(`Hello there, ${argv.name}! *he said, all Obi-wan-like*`)
  })
  .help()
  .argv
