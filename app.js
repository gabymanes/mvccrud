const express = require ("express")
const app = express()


app.set ("view engine", "ejs")
app.listen (3000,() => {console.log ("servidor funcionando")})
//app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require ("./routes/indexRouter")
const productosRouter = require("./routes/productRouter")
app.use("/", indexRouter)
app.use("/detalle", indexRouter)
app.use("/product", productosRouter)