let productos =[
    {id:1,nombre:"celu"},
    {id:2,nombre:"compu"},
    {id:3,nombre:"tablet"}
]

const controller = {
    index: (req,res) => {
    res.send ("Mostrar productos")
    },
    
    /*probar la vista parametrizada
    mostrarId: (req,res) => {
        let id = req.params.id
        res.send("Estas mostrando el producto " + id )},*/

    detalle: (req,res) => {
        let producto = productos
        let productoBuscado = producto.filter((producto) => {
        //FILTER DEVUELVE UN ARRAY
            return producto.id == req.params.id
        })
        productoBuscado = productoBuscado [0]
        res.render ("detalleproducto",{productoBuscado})
    }
    
}

module.exports = controller