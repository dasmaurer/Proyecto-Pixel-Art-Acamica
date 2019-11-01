$(document).ready();

var mousePresionado = false;

var nombreColores = [
  "White",
  "LightYellow",
  "LemonChiffon",
  "LightGoldenrodYellow",
  "PapayaWhip",
  "Moccasin",
  "PeachPuff",
  "PaleGoldenrod",
  "Bisque",
  "NavajoWhite",
  "Wheat",
  "BurlyWood",
  "Tan",
  "Khaki",
  "Yellow",
  "Gold",
  "Orange",
  "DarkOrange",
  "OrangeRed",
  "Tomato",
  "Coral",
  "DarkSalmon",
  "LightSalmon",
  "LightCoral",
  "Salmon",
  "PaleVioletRed",
  "Pink",
  "LightPink",
  "HotPink",
  "DeepPink",
  "MediumVioletRed",
  "Crimson",
  "Red",
  "FireBrick",
  "DarkRed",
  "Maroon",
  "Brown",
  "Sienna",
  "SaddleBrown",
  "IndianRed",
  "RosyBrown",
  "SandyBrown",
  "Goldenrod",
  "DarkGoldenrod",
  "Peru",
  "Chocolate",
  "DarkKhaki",
  "DarkSeaGreen",
  "MediumAquaMarine",
  "MediumSeaGreen",
  "SeaGreen",
  "ForestGreen",
  "Green",
  "DarkGreen",
  "OliveDrab",
  "Olive",
  "DarkOliveGreen",
  "YellowGreen",
  "LawnGreen",
  "Chartreuse",
  "GreenYellow",
  "Lime",
  "SpringGreen",
  "LimeGreen",
  "LightGreen",
  "PaleGreen",
  "PaleTurquoise",
  "AquaMarine",
  "Cyan",
  "Turquoise",
  "MediumTurquoise",
  "DarkTurquoise",
  "DeepSkyBlue",
  "LightSeaGreen",
  "CadetBlue",
  "DarkCyan",
  "Teal",
  "Steelblue",
  "LightSteelBlue",
  "Honeydew",
  "LightCyan",
  "PowderBlue",
  "LightBlue",
  "SkyBlue",
  "LightSkyBlue",
  "DodgerBlue",
  "CornflowerBlue",
  "RoyalBlue",
  "SlateBlue",
  "MediumSlateBlue",
  "DarkSlateBlue",
  "Indigo",
  "Purple",
  "DarkMagenta",
  "Blue",
  "MediumBlue",
  "DarkBlue",
  "Navy",
  "Thistle",
  "Plum",
  "Violet",
  "Orchid",
  "DarkOrchid",
  "Fuchsia",
  "Magenta",
  "MediumOrchid",
  "BlueViolet",
  "DarkViolet",
  "DarkOrchid",
  "MediumPurple",
  "Lavender",
  "Gainsboro",
  "LightGray",
  "Silver",
  "DarkGray",
  "Gray",
  "DimGray",
  "LightSlateGray",
  "DarkSlateGray",
  "Black"
];

// 1. Paso 3

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById("color-personalizado");

colorPersonalizado.addEventListener("change", function() {
  // Se guarda el color de la rueda en colorActual
  colorActual = colorPersonalizado.value;

  // 2. Paso 3  // Completar para que cambie el indicador-de-color al colorActual
  colorSeleccionado = colorActual
  $("#indicador-de-color").css("background-color", colorActual);
  $(".pixelGrilla").click(function() {
    $(this).css("background-color", colorActual);
  });
});

var paleta = document.getElementById(".paleta");

var grilla = document.getElementById("grilla-pixeles");

//Recorrer colores y crear paleta
for (var i = 0; i < nombreColores.length; i++) {
  $("#paleta").append(
    $("<div>")
      .css("background-color", nombreColores[i])
      .addClass("color-paleta")
  );
}

// Crear Grilla de pixeles
for (var i = 0; i <= 1750; i++) {
  $("#grilla-pixeles").append($("<div>").addClass("pixelGrilla"));
}

//1. Paso 1: Seleccioná un color de la paleta y mostralo en el indicador de color
$(".color-paleta").click(function() {
  colorSeleccionado = $($(this)).css("background-color");
  $("#indicador-de-color")
    .fadeOut(250)
    .css("background-color", colorSeleccionado)
    .fadeIn(250);
});

//1. Paso 2: Pintá un pixel de la grilla
$(".pixelGrilla").click(function() {
  $(this).css("background-color", colorSeleccionado);
});

// 2. Paso 4: Detectá si el Mouse está Apretado o no
//Para poder pintar en movimiento, vamos a necesitar una variable que nos diga si el mouse está o no apretado.
//El valor de esta variable deberá cambiar cada vez que se apriete el mouse y cada vez que se suelte. Tené en cuenta
//que vas a necesitar más de un evento para detectar cuando se aprieta el mouse y cuando se suelta.

$(document).mousedown(function() {
  mousePresionado = true;
});

$(document).mouseup(function() {
  mousePresionado = false;
});

$("#grilla-pixeles div").mouseover(function() {
  if (mousePresionado) {
    $(this).css("background-color", colorSeleccionado);
  }
});

// $("#grilla-pixeles div").mouseover(function() {
//   if (mousePresionado) {
//     $(this).css("background-color", colorPersonalizado);
//   }
// });

// 3. Paso 1  Borrar la grilla al presionar botón " borrar todo"

$("#borrar").click(function() {
  $("#grilla-pixeles div").animate({ "background-color": "white" }, 1200);
});

//3 Paso 2  "cargar superheroe"

$("#batman").click(function() {
  cargarSuperheroe(batman);
});

$("#flash").click(function() {
  cargarSuperheroe(flash);
});

$("#wonder").click(function() {
  cargarSuperheroe(wonder);
});

$("#invisible").click(function() {
  cargarSuperheroe(invisible);
});

//3 Paso 3 "descargar imagen"

$("#guardar").click(function() {
  guardarPixelArt();
});
