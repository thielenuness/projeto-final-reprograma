const { connect } = require('../models/repository')
const { gruposModel } = require('../models/gruposSchema')

connect()

const getAll = (request, response) => {
  gruposModel.find((error, grupos) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(grupos)
  })
}

const getById = (request, response) => {
  const id = request.params.id

  return gruposModel.findById(id, (error, grupos) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (grupos) {
      return response.status(200).send(grupos)
    }

    return response.status(404).send('Grupo não existente.')
  })
}

const add = (request, response) => {
  const novoGrupo = new gruposModel(request.body)

  novoGrupo.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoGrupo)
  })
}

const remove = (request, response) => {
  const id = request.params.id

  gruposModel.findByIdAndDelete(id, (error, grupos) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (grupos) {
      return response.status(200).send(id)
    }

    return response.status(404).send('Grupo não existente.')
  })
}

const update = (request, response) => {
  const id = request.params.id
  const gruposUpdate = request.body
  const options = { new: true }

  gruposModel.findByIdAndUpdate(
    id,
    gruposUpdate,
    options,
    (error, grupos) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (grupos) {
        return response.status(200).send(grupos)
      }

      return response.status(404).send('Grupo não existente.')
    }
  )
}


module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
}