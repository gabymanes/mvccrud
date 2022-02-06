//DUDA FORMULARIOS
//DUDA QUE PONER EN EL ROUTE EN DELETE Y PUT
//DUDA EN EL GENERATE ID PARA QUE ES(creo que es para cuando el crear id esta en 0)
//ver edit proccess

const express = require ("express")
const app = express()
const path = require ("path")
const methodOverride = require ("method-override")

//EJS
app.set ("views",path.join("./src/views"))
app.set("view engine", "ejs")

//Requerimiento de los Router
const indexRouter = require ("./src/routes/indexRouter")
const productosRouter = require("./src/routes/productRouter")
const usersRouter = require("./src/routes/usersRouter")


// Todos los App Use de Rutas
app.use("/", indexRouter)
app.use("/product", productosRouter)
app.use("/users",usersRouter)
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use (methodOverride("_method"))
//app.use(express.static(path.join(__dirname, 'public')))



//Puerto y Servidor
let port = 3000
app.listen (port ,() => {console.log ("Servidor funcionando en " + port)})