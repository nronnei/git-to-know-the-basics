const cmd = 'hello [name]';
const desc = 'welcome [name] to Tatooine';

function builder(yargs) {
  yargs.positional('name', {
    type: 'string',
    default: 'Luke Skywalker',
    describe: 'the name to say hello to'
  })
}

function handler(argv) {
  console.log(`Hello there, ${argv.name}! *he said, all Obi-wan-like*`)
}

export default {
  cmd,
  desc,
  builder,
  handler
}
