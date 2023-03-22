const connection = require('./connection')
const datetime = require('../utils/dateConfig')

const getAll = async () => {
    const [getNotes] = await connection.execute('SELECT * FROM lembretes')
    return getNotes
}

const createNote = async (notes) => {
    const {note} = notes

    const createdNote = await connection.execute('INSERT INTO lembretes(note, status, created_at, updated_at ) VALUES (?, ?, ?, ?)' [note, 'pendente', datetime, datetime])
    
    return createdNote
}

const updateNote = async (id, notes) => {
    const { note , status } = notes

    const updatedNote = await connection.execute('UPDATE lembretes SET note = ?, status = ? WHERE id = ? ', [note, status, id])
    return updatedNote
}

const deleteNote = async (id) => {
    const removedNote = await connection.execute('DELETE FROM lembretes WHERE id = ?', [id])
    return removedNote
}


module.exports = {
    getAll,
    createNote,
    deleteNote,
    updateNote
}