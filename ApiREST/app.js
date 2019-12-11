//gestionara el express
const express = require('express'),
    config = require('./config'),
    app = express(),
    router = require('./router')

app
    .set('port', (process.env.PORT)) //puerto que se va a establecer para la app, depende si esta en produccion o internet
    .use(express.urlencoded({ extended: false })) //archivo formato json
    .use(express.json())
    .use('/api', router)

module.exports = app