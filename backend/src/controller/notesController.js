const notesModel = require('../model/notesModel')

const getAll = async (req, res) => {
    const notes = await notesModel.getAll()

    try {
        res.status(200).json(notes)
    } catch (e) {
        res.status(404).console.log(e)
    }

}

const createNote = async (req, res) => {
    // eslint-disable-next-line no-unused-vars
    const createdNote = await notesModel.createNote(req.body)

    return res.status(200).json(res.body)
}

const updateNote = async (req,res) => {

    const { id } = req.params

    await notesModel.updateNote(id, req.body)

    return res.status(200).json(res.body)
}

const deleteNote = async (req,res) => {
    const { id } = req.params

    await notesModel.deleteNote(id)

    return res.status(204).json()

}

module.exports = {
    getAll,
    createNote,
    deleteNote,
    updateNote
}