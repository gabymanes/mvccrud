const path = require ("path")
const controller = {
    index: (req,res) => {
    res.send ("todo bien")},
    
    
    detalle: (req,res) => {
        res.sendFile(path.join(__dirname,"../detalle.html"))
    }
}

module.exports = controller