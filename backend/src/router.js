const express = require('express')
const notesController = require('./controller/notesController')
const notesMiddleware =  require('./middlewares/notesMiddleware')


const router = express.Router()

router.get('/lembretes', notesController.getAll)
router.post('/lembretes', notesMiddleware.validationData, notesMiddleware.validationDeadline, notesController.createNote)
router.put('/lembretes/:id', notesMiddleware.validationData, notesMiddleware.validationDeadline, notesController.updateNote)
router.delete('/lembretes/:id', notesController.deleteNote)

module.exports = router