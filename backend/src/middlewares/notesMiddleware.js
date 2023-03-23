const validationData = (req,res, next) => {
    const { body } = req

    if(body.note === undefined) {
        return res.status(400).json({message: 'O campo Nota foi inserido incorretamente.'})
    }

    if(body.note === '') {
        return res.status(400).json({message: 'O campo Nota não pode ser vazio.'})
    }

    next()

}

const validationDeadline = (req,res, next) => {
    const { body } = req

    if(body.deadline === undefined) {
        return res.status(400).json({message: 'O campo Data de Finalização foi inserido incorretamente.'})
    }

    if(body.deadline === '') {
        return res.status(400).json({message: 'O campo Data de Finalização não pode ser vazio.'})
    }

    next()

}

module.exports = {
    validationData,
    validationDeadline
}