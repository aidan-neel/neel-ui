#!/usr/bin/env node
const args = process.argv.slice(2);

const commands = ['init', 'add', 'list'];

if (!commands.includes(args[0])) {
  console.error('Invalid command');
  process.exit(1);
}

const runCommand = async (command, args) => {
  try {
    const module = await import(`./${command}.js`);
    module.default(args);
  } catch (error) {
    console.error(`Error executing command "${command}": ${error}`);
    process.exit(1);
  }
};

runCommand(args[0], args).catch(error => {
  console.error(error);
  process.exit(1);
});
