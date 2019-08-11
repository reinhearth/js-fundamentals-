var raphael = {
  nombre: 'Raphael',
  apellido: 'Vazquez',
  edad: 23
}

var cristian = {
  nombre: 'Cristian',
  apellido: 'Martinez',
  edad: 24
}

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(raphael)
imprimirNombreEnMayusculas(cristian)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
imprimirNombreEnMayusculas({ apellido: 'Gomez' })
