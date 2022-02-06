const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/usersController")

//bienvenidos usuarios. leer los usuarios y mostrar 1
router.get("/:id",controller.index)


//el form es para crear un usuario
router.get ("/create", controller.form)


/*
roter.get ("/usuariosList",controller.listar)

Crear usuario
router.post ("/create",controller.crear)


Formulario de edicion y borrar
router.get ("/edit/:id",controller.mostrarformulario)

Editar
router.put("/edit/:id",controller.editarProcess)
DUDA

Eliminar
router.delete("/edit/:id",controller.deleteProcess)
DUDA
*/
module.exports = router