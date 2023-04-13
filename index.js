function encriptar() {
  let texto = document.getElementById("texto").value.toLowerCase(); // Convertir a minúsculas
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let fondo = document.getElementById("fondo");
  let textoRespuesta = document.getElementById("mensaje");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = ""; // Borrar el texto original
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    fondo.src = "./imagenes/encriptado.jpg";
    mensaje.textContent = textoCifrado;
  } else {
    fondo.src = "./imagenes/fondo.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value.toLowerCase(); // Convertir a minúsculas
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let fondo = document.getElementById("fondo");
  let textoRespuesta = document.getElementById("mensaje");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = "";
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    fondo.src = "./imagenes/desencriptado.jpg";
    mensaje.textContent = textoCifrado;
  } else {
    fondo.src = "./imagenes/fondo.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}