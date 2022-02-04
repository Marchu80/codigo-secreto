    var inputDeEntrada = document.querySelector("#input-texto");
    var inputDeSalida = document.querySelector("#msg");
    
    const encriptar = document.querySelector("#btn-encriptar");
    const desencriptar = document.querySelector("#btn-desencriptar");
    const copiar = document.querySelector("#btn-copy");


function encrypt(event) {
    //event.preventDefault();
    var texto = inputDeEntrada.value;
    var textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")

    inputDeSalida.value = textoEncriptado;
}

function decrypt() {
    var textoEncriptado = inputDeEntrada.value;
    var texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")

    inputDeSalida.value = texto;
}

  function copy() {
      var textoEncriptado = inputDeSalida.value;
      navigator.clipboard.writeText(textoEncriptado);
      inputDeEntrada.value = "";
      inputDeEntrada.focus();
  }

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/