const express = require ("express")
const app = express ()
const router = express.Router()
const controller = require ("../controllers/usersController")

router.get ("/", controller.form)
/*
router.post ("/",controller.crear)
router.get ("/editydelete",controller.mostrarformulario)
router.put("/nosequeponer",controller.editar)
router.delete("/idem",delete)

*/
module.exports = router