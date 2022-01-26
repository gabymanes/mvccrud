const express = require ("express")
const app = express ()
const router = express.Router()
const controller = require ("../controllers/formController")

router.get ("/", controller.home)

module.exports = router