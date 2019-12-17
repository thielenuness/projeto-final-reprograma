
const { hospitalModel } = require('../models/hospitaisSchema');
const { connect } = require('../models/repository')

connect()

const addHospital = (request, response) => {
    // request.body.grupo = 'comum';
    const novoHospital = new hospitalModel(request.body);

    novoHospital.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }
        return response.status(201).send(novoHospital)
    })
};

const addZonaSegura = (request, response) => {
    // request.body.grupo = 'comum';
    const novaZonaSegura = new addZonaSegura(request.body);

    novaZonaSegura.save((error) => {
        if (error) {
            return response.status(500).send(error)

        }
        return response.status(201).send(novaZonaSegura)

    })

};

const getAll = (request, response) => {
    hospitalModel.find((error, hospitais) => {
        if (error) {
            return response.status(500).send(error)
        }
        return response.status(200).send(hospitais)
    });
};



module.exports = {
    addHospital,
    getAll,
    addZonaSegura

}