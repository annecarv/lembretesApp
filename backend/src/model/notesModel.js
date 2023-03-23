const connection = require('./connection')
const datetime = require('../utils/dateConfig')

const getAll = async () => {
    const [getNotes] = await connection.createQuery('SELECT * FROM lembretes')
    return getNotes
}

const createNote = async (notes) => {
    const {note} = notes

    const createdNote = await connection.createQuery('INSERT INTO lembretes(note, status, deadline, created_at, updated_at ) VALUES (?, ?, ?, ?)' [note, 'pendente', datetime, datetime, datetime])
    
    return createdNote
}

const updateNote = async (id, notes) => {
    const { note , status, deadline } = notes

    const updatedNote = await connection.createQuery('UPDATE lembretes SET note = ?, status = ?, deadline = ?, WHERE id = ? ', [note, status, deadline, id])
    return updatedNote
}

const deleteNote = async (id) => {
    const removedNote = await connection.createQuery('DELETE FROM lembretes WHERE id = ?', [id])
    return removedNote
}


module.exports = {
    getAll,
    createNote,
    deleteNote,
    updateNote
}