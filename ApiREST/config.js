//variables de entorno
process.env.NODE_ENV = process.env.Node_ENV || 'dev' //operador cortocircuito detecta el entorno donde se ejecuta la app
process.env.PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === 'dev') {
    process.env.URL_DB = 'mongodb://localhost:27017/products'
}