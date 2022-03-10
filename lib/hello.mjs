/**
 * Basic example usage of the command
 * @const {string} cmd
 */
const cmd = 'hello [name]';
/**
 * Basic description of what the command does
 * @const {string} desc
 */
const desc = 'welcome [name] to Tatooine';

/**
 * Defines arguments for your commands using yargs
 * @param {*} yargs - The interface passed by the yargs library
 * @returns {undefined}
 */
function builder(yargs) {
  yargs.positional('name', {
    type: 'string',
    default: 'Luke Skywalker',
    describe: 'the name to say hello to'
  })
}

/**
 * The function that the command actually runs when invoked.
 * @param {Object} argv - Arguments parsed by yargs
 * @returns {*} - Whatever you want. In this case, it's undefined.
 */
function handler(argv) {
  console.log(`Hello there, ${argv.name}! *he said, all Obi-wan-like*`)
}

export default {
  cmd,
  desc,
  builder,
  handler
}
