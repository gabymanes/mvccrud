const controller = {
    index: (req,res) => {
    res.render ("detalleproducto")},
    
    detalle: (req,res) => {
        let id = req.params.id
            res.send("vamos peke que estas mostrando el producto " + id )
      }
   
}

module.exports = controller