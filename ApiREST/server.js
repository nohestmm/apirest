//es el archivo que levantara la terminal
const c = console.log,
    app = require('./app')
db = require('./models/db')
    // se crea una variable app que traera el puerto que leera ese archivo
app.listen(
    app.get('port'),
    () => c(`iniciando Api Restful en el puerto ${app.get('port')}`)
)

c(process.env.NODE_ENV)
c(process.env.URL_DB)
c(process.env.PORT)