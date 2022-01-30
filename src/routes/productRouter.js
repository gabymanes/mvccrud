const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/productcontroller")

router.get("/", controller.index)
router.get("/detalle/:id",controller.detalle)

//router.get("/:id", controller.mostrarId) Ruta parametrizada



module.exports = router