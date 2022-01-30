const fs = require('fs')
const chalk = require('chalk');

const addNote = (title, body) => {
    debugger
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notesToKeep.length == notes.length) {
        console.log(chalk.red.inverse('Note not found'))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(title))
        console.log(chalk.blue.inverse(note.body))
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

const listAllNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('All notes present are...'))
    notes.forEach(note => console.log(note.title));
}

const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    } catch (ex) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listAllNotes: listAllNotes,
    readNote: readNote
}