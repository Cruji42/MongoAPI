//importacion de las extensiones
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries.js');

//instancia
const app = express();
const port = 3000;

//tipo de datos que va a usar
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
      extend: true
  })
);

//ruta por defecto
app.get('/', (request, response) =>{
    response.json({
        info: 'Gober Developer'})
});

//curl http://localhost:3000/getUsers
app.get('/getUsers', db.getUsers);
//
app.post('/Login', db.Login);
//
app.get('/getProducts', db.getProducts);

app.listen(port, () =>{
   console.log('API running');
});

