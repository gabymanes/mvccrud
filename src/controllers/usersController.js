const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const controller = {
   index:(req,res) => {
    let usuarios = users
    let usuarioBuscado = usuarios.find((usuario) =>{
      //FIND DEVUELVE EL PRIMERO!!
      return  usuario.id == req.params.id
    })
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
      let user = users
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
    mostrarformulario:(req,res) => {
      let user = users
      let id = req.params.id
      let usuarioBuscado = user.find((usuario) => usuario.id == id);
      res.render("/formEditDelete",{usuarioBuscado})
    }


    deleteProcess: (req,res) =>{
      let user = users
      let usuarioBorrado = req.params.id
      let jsonAEscribir = user.filter(usuario => usuario.id !== usuarioBorrado)
      fs.writeFileSync(users, JSON.stringify(jsonAEscribir,null,""))  
    }
     res.redirect("/")
    --------------

    editarProcess: al poner el boton edit (href al formulario) en el detalle ya te traes un id 
    trabajas con el id con lo nuevo que te llega del formulario y lo pusheas
      let user = users
    {
         "id" : req.params.id,
         let productToEdit = products.find (product => product.id == id)??
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
    
    let user = users; 
    let jsonAEscribir = user.map((usuario) => {
      if( usuario.id == id ){
        return usuario = usuarioNuevo;
            } else {
              return usuario
            }
          })
    
    fs.writeFileSync(users, JSON.stringify(jsonAEscribir,null,""))
    }
 
    */ 


module.exports = controller