const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const controller = {
   index:(req,res) => {
    let usuarios =users
    usuarios.find((usuarioBuscado) =>{
      return  usuarioBuscado.id == req.params.id
    })
    usuarioBuscado = usuarioBuscado[0]
    res.render("usuarioIndex",{usuarioBuscado})
   },

    form : (req,res) =>{ 
    res.render ("formulario")
    },
    }
    
    /*
    ------------------



    HAY ALGO QUE NO ESTA FUNCIONANDO
    let generateID = .....
    
    crear: deberia de trabajar con el formulario 
    {
         "id" : generar ID,
         let nombre: req.body.nombre
         let apellido: req.body.apellido
         let telefono: req.body.telefono
         let email: req.body.email
        }

     let usuarioNuevo = {   
         "nombre": nombre  
         "apellido" : apellido
         "telefono" : telefono
         "email" : email
        }
    
    users.push(usuarioNuevo);
    fs.writeFileSync(users, JSON.stringify(users,null,""))
    }

    --------------
    
    delete: (id) =>{
    users.filter(usuario => usuario.id !== id)
    fs.writeFileSync(users, JSON.stringify(users,null,""))  
    }
    
    --------------

    editar: trabajas con el id con lo nuevo que te llega del formulario! 
    
    */ 

module.exports = controller