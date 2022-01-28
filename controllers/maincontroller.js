const path = require ("path")
const controller = {
    index: (req,res) => {
    res.send ("todo bien")},
    
    //Probar enviar una vista con el path
    detalle: (req,res) => {
        res.sendFile(path.join(__dirname,"../detalle.html"))
    }
}

module.exports = controller