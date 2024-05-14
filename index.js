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

//sinalizando que todo corpo de requisiçao
//virá como JSON
app.use(express.json())

//end point de create [post]/item
app.post('/item', function(req,res){
  //acessamos  o corpo da requisiçao
  const body = req.body
   
  const novoItem = body.nome
  //adicionar novo item na lista
  itens.push(novoItem)
  //enviar mensagem de sucesso
  res.send('item adicionado '+ novoItem)
})

//endpoint update[PUT] /item/:id
app.put('/item/:id', function (req, res){
  
  //acessar item a ser atualizado, a partir
  const id = req.params.id
  //do corpo da requisiçao
  const body = req.body
  const atualizarItem = body.nome
//atualizar na lista o item recebido
itens[id-1] = atualizarItem
//enviamos uma mensagem de sucesso
res.send('item atualizado com sucesso: ' + id+ ','+atualizarItem)

})


app.listen(3000)
