const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, "../../data/usuarios.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const controller = {
    index: (req,res) => {
    res.render ("detalleproducto")},
    
    detalle: (req,res) => {
        let id = req.params.id
            res.send("vamos peke que estas mostrando el producto " + id )
      }
   
}

module.exports = controller