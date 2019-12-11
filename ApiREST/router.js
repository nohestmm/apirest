//rutas que va a proveer la api, cargara las rutas de routes
const express = require('express'),
    api = express.Router()

api.get('/', async(req, res) => { // el diagonal hace referencia a /api del archivo app
    await res.status(200).send({
        message: 'APirest OK'
    })
})

module.exports = api