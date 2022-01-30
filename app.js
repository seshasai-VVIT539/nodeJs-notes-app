const chalk = require('chalk');
const notes = require("./notes");
const yargs = require('yargs');
const { argv } = require('yargs');

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler() {
        notes.addNote(argv.title, argv.body)
    },
})

yargs.command({
    command: "remove",
    describe: "Remove a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler() {
        notes.removeNote(argv.title)
    },
})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler() {
        notes.listAllNotes()
    },
})

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler() {
        notes.readNote(argv.title)
    },
})

yargs.parse()