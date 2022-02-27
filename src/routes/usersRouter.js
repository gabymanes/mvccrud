const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/usersController")

//bienvenidos usuarios. leer los usuarios y mostrar 1
router.get("/detalle/:id",controller.index)
router.get("/", controller.home)
router.get ("/listado", controller.listar)


//el form es para crear un usuario
router.get ("/create", controller.form)

//Formulario de edicion y borrar
router.get ("/edit/:id",controller.mostrarformulario)

/*Crear usuario
router.post ("/create",controller.crear)


Editar
router.put("/edit/:id",controller.editarProcess)


Eliminar
router.delete("/edit/:id",controller.deleteProcess)

*/
module.exports = router