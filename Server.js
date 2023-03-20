const express = require('express');
const app = express();
app.get('/', (req, res)=>{
    res.send('Opa! Estou aprendendo Express!')
});
app.get('/contato', (req, res)=>{
    res.send('Já viu meu github? github.com/tdiascontato !')
});
app.get('/sobre', (req, res)=>{
    res.send('Opa! Não há nada para ver aqui ;)')
});
app.listen(4000, ()=>{
    console.log('Estou rodando no: http://localhost:4000')
})