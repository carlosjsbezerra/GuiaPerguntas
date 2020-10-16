const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

// connection.authenticate()
//     .then(() => console.log('Conexão realizada com sucesso no database'))
//     .catch((err) => console.log(err))

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => { 
    res.render('index')
})

app.get('/perguntar', (req, res) => { 
    res.render('perguntar')
})

app.post('/salvar', (req, res) => { 
    const { titulo, descricao } = req.body

    res.send(`Titulo: ${titulo}, Descricao: ${descricao}`)
})

app.listen(3001)