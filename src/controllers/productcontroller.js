const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, "../../data/usuarios.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

/*let productos =[
    {id:1,nombre:"celu"},
    {id:2,nombre:"compu"},
    {id:3,nombre:"tablet"}
]*/

const controller = {
    
    index: (req,res) => {
    res.send ("Aca me gustaria que se leyera la DB")},
    
    /*probar la vista parametrizada
    mostrarId: (req,res) => {
        let id = req.params.id
        res.send("Estas mostrando el producto " + id )},*/

    detalle: (req,res) => {
        //let productoNuevo = productos.filter((producto) => {
        //return producto == req.params.id
        //})
        res.render ("detalleproducto")},
        //,{productos:productoNuevo})
    


}

module.exports = controller