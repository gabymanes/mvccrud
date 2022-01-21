const express = require ("express")
const app = express ()
const router = express.Router()
const controller = require ("../controllers/maincontroller")

router.get ("/", controller.index)
router.get ("/detalle", controller.detalle)

module.exports = router
