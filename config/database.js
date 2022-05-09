const mongoose = require('mongoose')

const conexao = async() =>{
    //conexão local
    // var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas

    var atlas = await mongoose.connect ('mongodb+srv://sandayjulie22:sandayjulie22@ac1tec.hzryj.mongodb.net/2emia1tri')
}

module.exports = conexao

//mongodb+srv://root:Santinho111@habdig7oficial-cluster.ccizs.mongodb.net/ac1-db?retryWrites=true&w=majority