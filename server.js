//criar uma query(consulta) simples

const express= require('express');
const mysql = require('mysql2');
const app= express();

app.listen(3000,()=>{
    console.log('servidor em execução');
})


//criação da conexão com o banco de dados
const connetion= mysql.createConnection({
    host: 'localhost',
    user:'user_bd_tasks',
    password: 'QLOP4TDcQIGT2R97Djet&vXYHggatTSZE4',
    database: 'nodejs_tasks'

})


//testar a conexão
connetion.connect(error =>{
    if(error){
        conseole.log('erro da conexão ao mysql:'+ error.mensage)
        return
}
        conseole.log('conexão realizada cm sucesso!!')
})


