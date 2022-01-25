function articulo(proveedor,precio,nombre){
this.proveedor=proveedor
this.precio=precio
this.nombre=nombre
this.telefono=function(){
    console.log(this.nombre,this.proveedor.nombre,this.proveedor.telefono)
}
}

function proveedor(nombre,email,telefono){
    this.nombre=nombre
    this.email=email
    this.telefono=telefono
}
let proveedor1=new proveedor("paula", "pdm18@gmail",667283992)
let articulo1=new articulo(proveedor1,29,"pantalongucci")

articulo1.telefono()