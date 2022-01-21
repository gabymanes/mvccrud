const express = require ("express")
const app = express ()
const router = express.Router()
const controller = require ("../controllers/productcontroller")

/*router.get("/",(req,res) => {
    res.send("productos")
},*/
router.get("/", controller.index)
//router.get("/detalle/:id", controller.detalle....)) 

module.exports = router