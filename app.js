const express = require ("express")
const app = express()


app.set ("view engine", "ejs")
app.listen (3000,() => {console.log ("servidor funcionando")})
//app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require ("./routes/indexRouter")
const productosRouter = require("./routes/productRouter")
const formRouter = require("./routes/formRouter")


app.use("/", indexRouter)
app.use("/product", productosRouter)
app.use("/formulario",formRouter)