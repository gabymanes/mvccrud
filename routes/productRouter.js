const express = require ("express")
const app = express ()
const router = express.Router()
//const controller = require ("../controllers/productcontroller")

router.get("/product",(req,res) => {
    res.send("productos")
}) 

module.exports = router