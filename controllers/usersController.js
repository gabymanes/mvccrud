const fs = require('fs');
const path = require('path');
//const usersFilePath = path.join(__dirname, '../data/usuarios.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const controller = {
    form : (req,res) =>{ 
    res.render ("formulario")
    },

    /*crear: (usuario) => {
    users.push(usuario);
    fs.writeFileSync(users, JSON.stringify(users,null,""))
    }
    
    delete: (id) =>{
    users.filter(usuario => usuario.id !== id)
    fs.writeFileSync(users, JSON.stringify(users,null,""))  
    }
    */ 
}
//console.log(controller.crear({fullname:"jabi",email:"fega@gmail.com"}))
module.exports = controller