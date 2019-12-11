//

const c = console.log,
    mongoose = require('mongoose'),
    config = require('../config')

class DataBase {
    constructor() {
        this.connect()
    }
    connect() {
        mongoose.connect(process.env.URL_DB, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() =>
                c(`conexion exitosa, mongodb activo al servidor mongoose ${process.env.URL_DB}`))
            .catch(err =>
                c(`Error de conexion ${err.message}`))
    }
}

module.exports = new DataBase