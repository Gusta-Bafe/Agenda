const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const cadastroController = require('./src/controllers/cadastroController');

// Rotas da home
route.get('/', homeController.index);

//Rotas de Login
route.get('/login',loginController.index);


//Rotas de cadastro
route.get("/register",cadastroController.index)
route.post('/register/confirmed',cadastroController.register);


module.exports = route;
