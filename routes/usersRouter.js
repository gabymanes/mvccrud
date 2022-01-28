const express = require ("express")
const app = express ()
const router = express.Router()
const controller = require ("../controllers/usersController")

router.get ("/", controller.form)

module.exports = router