//objetos y clases//
function productos (nombre,precio,cantidad){
this.nombre =nombre 
this.precio=precio
this.cantidad=cantidad
this.f=function() {
    console.log (this.nombre,this.precio,this.cantidad)
    
}
}
let producto1=new productos("tele",20,5)
console.log(producto1)    
producto1.f()