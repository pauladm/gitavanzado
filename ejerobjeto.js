function bus(capacidad, conductor) {
  this.capacidad = capacidad;
  this.pasajeros = 0;
  this.conductor = conductor;
  this.subir = function (pasajero) {
    this.libre = this.capacidad - this.pasajeros;
    if (pasajero < this.libre) {
      this.pasajeros = this.pasajeros + pasajero;
      if (this.capacidad < this.pasajeros) {
        this.pasajeros = this.capacidad;
      }
    } else {
      this.pasajeros = this.capacidad;
    }
  };
  this.bajar = function (bajando) {
    this.restante = this.pasajeros - bajando;
    if (this.restante < 0) {
      this.pasajeros = 0
    } else {
      this.pasajeros = this.restante;
    }
  };
}

function conductor(nombre, licencia) {
  this.nombre = nombre;
  this.licencia = licencia;
}

let conductor1=new conductor("oliver", 1529)
let bus1=new bus (40,conductor1)

bus1.subir(10)
bus1.bajar(7)

console.log (bus1.pasajeros)