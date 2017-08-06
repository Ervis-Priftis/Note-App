console.log('Starting App.');

const fs = require('fs'); // fs Asynchronously append data to a file, creating the file if does not yet exist
// const os = require('os'); // os.userInfo method return information about the currently effective User
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js'); // require my own file or function

var argv = yargs.argv;
var command = argv._[0];
console.log(`Command: ${command}`);
console.log('Yargs:', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);

} else if (command === 'list') {
  notes.getAll();

} else if (command === 'read') {
  notes.getNote(argv.title);

} else if (command === 'remove') {
  notes.removeNote(argv.title);

} else {
  console.log('Command not recognized');
}
