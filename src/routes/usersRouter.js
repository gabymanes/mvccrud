const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/usersController")

//bienvenidos usuarios. leer los usuarios y mostrarlos
router.get("/",controller.index)


//el form es para crear un usuario
router.get ("/create", controller.form)

/*
Crear usuario
router.post ("/create",controller.crear)


Formulario de edicion y borrar?
router.get ("/edit/:id",controller.mostrarformulario)

Editar
router.put("/delete/:id",controller.editar)

Eliminar
router.delete("/idem",delete)

*/
module.exports = router