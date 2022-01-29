const path = require ("path")
const controller = {
    index: (req,res) => {
    res.send (" INDEX")},
    
    //Probar enviar una vista/archivo con el path
    detalle: (req,res) => {
        res.sendFile(path.join(__dirname,"../../detalle.html"))
    }
}

module.exports = controller