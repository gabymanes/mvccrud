const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const controller = {
  
  home:(req,res) => {
    res.send("Elija un ID")
  },

  index:(req,res) => {
    let usuarios = users
    let usuarioBuscado = usuarios.find((usuario) =>{
      //FIND DEVUELVE EL PRIMERO!!
      return  usuario.id == req.params.id
    })
    res.render("usuarioIndex",{usuarioBuscado})
   },
  

  listar: (req,res) => {
   
    res.render ("usuariosList",{users})
    //error en el for
  },

  //FORM PARA CREAR 
  form : (req,res) =>{ 
    res.render ("formulario")
    },

  //edit y eliminar  
  mostrarformulario:(req,res) => {
      let user = users
      let id = req.params.id
      let usuarioBuscado = user.find((usuario) => usuario.id == id);
      res.render("formEditDelete",{usuarioBuscado})
    },


}
    
    /*
    ------------------

   
    HAY ALGO QUE NO ESTA FUNCIONANDO
   generateID: function () {
        let json = products;
        let lastUser = json.pop();
        if (lastUser){
          return id= lastUser.id + 1;
        }
        return id = 1;
    
    crear: (req,res) => {deberia de trabajar con el formulario 
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
    res.redirect("users/listado")
    }

    --------------
    


    deleteProcess: (req,res) =>{
      let user = users
      let usuarioBorrado = req.params.id
      let jsonAEscribir = user.filter(usuario => usuario.id !== usuarioBorrado)
      fs.writeFileSync(users, JSON.stringify(jsonAEscribir,null,""))  
    }
     res.redirect("/users/listado")
     deberia de ver adonde me manda este redirect
    --------------

    editarProcess: al poner el boton edit (href al formulario) en el detalle ya te traes un id 
    trabajas con el id con lo nuevo que te llega del formulario y lo pusheas
    (req,res) => {  
      let user = users
      {
         "id" : req.params.id,
         let productToEdit = products.find (product => product.id == id)??
         let nombre: req.body.nombre
         let apellido: req.body.apellido
         let telefono: req.body.telefono
         let email: req.body.email
        }

      let usuarioEditado = {   
         "nombre": nombre  
         "apellido" : apellido
         "telefono" : telefono
         "email" : email
        }
    
      let user = users; 
      let jsonAEscribir = user.map((usuario) => {
      if( usuario.id == id ){
        return usuario = usuarioEditado;
            } else {
              return usuario
            }
          })
    
      fs.writeFileSync(users, JSON.stringify(jsonAEscribir,null,""))
      res.redirect("/users/usarioEditado",{usuarioEditado})
    }
  
 
    
  
  deberia de crear otra ruta y asi te muestra el usuario editado y tener en la vista un boton que te mande al index y listo.*/ 


module.exports = controller