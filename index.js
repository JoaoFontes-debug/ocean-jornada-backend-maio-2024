const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Desafio: criar uma rota [GET] /oi que retorna "Olá, mundo!"
app.get('/oi', function (req, res) {
  res.send('Olá, mundo!')
})

// lista de itens

const itens =  ['rick sanchez', 'morty', 'sumer']
//              0                 1         2
//endpoint de read All [GET] /item
app.get('/item', function (req,res) {
  res.send (itens)
}) 

//endpoint read by id [GET] /item/:id
app.get('/item/:id', function(req, res){
  // acessamos o parametro de rota id
  const id = req.params.id

  //acessamos o item na lista usando o "id-1"
  const item = itens[id-1]
  
  res.send(item)
})

//parametros de rotas exemplo "/:id"


app.listen(3000)
