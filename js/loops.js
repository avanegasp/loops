// //PRIMER EJERCICIO
// var libros = ['libro1', 'libro2']
//
//
// for (var i = 0; i < libros.length; i++){
//   console.log(libros[i])
// }
//
// // SEGUNDO EJERCICIO
//
  var libros = ["Libro1", "Libro2"];
  var resultado = ""

  for (var i = 0; i < libros.length ; i++){
    var libro = libros[i]
    resultado += `<p>${libro}</p>`
  }
  $('body').append('<p>' + resultado + '</p>')
//

  // un variable que se llame resultado
  // Que se igual a una string vacío
  // y luego dentro del for lo que vas hacer
  // Es sumarle a resultado el string con un p y el libro interpolado
  // Luego por fuera del for
  // Usas jqury para hacer el append al body de resultado



  // for (var i = 10 ; i <= 20; i=i+2){
  //   console.log(i)
  // }
