const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const controller = {
    form : (req,res) =>{ 
    res.render ("formulario")
    },

    /*
    HAY ALGO QUE NO ESTA FUNCIONANDO
    crear: deberia de trabajar con el formulario 
    {
     usuario = {
         id : req.params.id
         nombre: req.body.nombre
     }
    users.push(usuario);
    fs.writeFileSync(users, JSON.stringify(users,null,""))
    }
    
    delete: (id) =>{
    users.filter(usuario => usuario.id !== id)
    fs.writeFileSync(users, JSON.stringify(users,null,""))  
    }
    

    edit: trabajas con el id con lo nuevo que te llega del formulario! 
    
    */ 
}
module.exports = controller