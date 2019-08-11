var Raphael = {
  nombre: 'Raphael',
  apellido: 'Vazquez',
  edad: 23
}

var Cristian = {
  nombre: 'Cristian',
  apellido: 'Martinez',
  edad: 24
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Raphael)
imprimirNombreEnMayusculas(Cristian)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}
