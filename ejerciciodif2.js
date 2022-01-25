function factura(clientes,elementos) {
    this.clientes=clientes
    this.elementos=elementos
    this.baseimponible=0
    this.iva=21
    this.total=0
    this.formadepago="contado"
    this.facturatotal=function(){ 
        this.baseimponible=this.elementos[1]* this.elementos[2]
        this.total= this.baseimponible+(1+this.iva/100)   
    }
     this.muestratotal=function(){
         console.log (this.total)

     }
}

function clientes(nombre,direccion,telefono,nif){

    this.nombre=nombre
    this.direccion=direccion
    this.telefono=telefono
    this.nif=nif
    
}
function empresa(nombre,direccion,telefono,cif){

    this.nombre=nombre
    this.direccion=direccion
    this.telefono=telefono
    this.cif=cif
    
}
 
let cliente1=new clientes("dan","calle rio",677728829,79892930)
let empresa1=new empresa("rodaballos", "madreselcta", 556273829, 72638094)
let Factura1=new factura (cliente1,["es una factura",5, 20],empresa1)

let cliente2=new clientes("dani","calle rio",677728829,79892930)
let empresa2=new empresa("rodaballos", "madreselcta", 556273829, 72638094)
let Factura2=new factura (cliente2,["es una factura",15, 30],empresa2)


let facturass=[Factura1,Factura2]
for (let i = 0; i < facturass.length; i++) {
facturass[i].facturatotal()
facturass[i].muestratotal ()
console.log (facturass[i].clientes)
}
