const Login = require('../models/cadastroModel')


exports.index =(req, res) =>{
    res.render('cadastro')
}


exports.register = async (req,res) => {
    const login = new Login(req.body)
    await login.register();
    


    if (login.erros.length > 0 ){
        req.flash('erros', login.erros)
        req.session.save( ()=> {
          return res.redirect('back')
        })

        return
    }
    res.send(login.erros);  
  }
    