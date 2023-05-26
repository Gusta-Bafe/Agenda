const Login = require('../models/cadastroModel')


exports.index =(req, res) =>{
    res.render('cadastro')
}


exports.register = (req,res) => {
    const login = new Login(req.body)
    login.register();
    res.send(login.erros);  
  }
    