const express = require ("express")
const app = express()


app.set ("view engine", "ejs")
app.listen (3000,() => {console.log ("servidor funcionando")})
//app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require ("./src/routes/indexRouter")
const productosRouter = require("./src/routes/productRouter")
const usersRouter = require("./src/routes/usersRouter")


app.use("/", indexRouter)
app.use("/product", productosRouter)
app.use("/users",usersRouter)

app.use(express.urlencoded({extended: false}))
app.use(express.json())