const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/productcontroller")

/*router.get("/",(req,res) => {
    res.send("productos")
},*/
router.get("/", controller.index)
router.get("/detalle",controller.detalle)
//router.get("/:id", controller.mostrarId) Ruta parametrizada
module.exports = router