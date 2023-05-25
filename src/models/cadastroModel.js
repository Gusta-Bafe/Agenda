const mongoose = require('mongoose');

const cadastroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String
});

const cadastroModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;
