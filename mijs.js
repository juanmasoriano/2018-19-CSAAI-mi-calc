var operandoA
var operador
var operandoB

function main() {
  console.log("Que comiencen los juegos de JS");

  var reset = document.getElementById('reset')
  var signo = document.getElementById('signo')
  var porcentaje = document.getElementById('porcentaje')
  var división = document.getElementById('división')

  var siete = document.getElementById('siete')
  var ocho = document.getElementById('ocho')
  var nueve = document.getElementById('nueve')
  var multiplicación = document.getElementById('multiplicación')


  var cuatro = document.getElementById('cuatro')
  var cinco = document.getElementById('cinco')
  var seis = document.getElementById('seis')
  var resta = document.getElementById('resta')

  var uno = document.getElementById('uno')
  var dos = document.getElementById('dos')
  var tres = document.getElementById('tres')
  var suma = document.getElementById('suma')

  var cero = document.getElementById('cero')
  var coma = document.getElementById('coma')
  var igual = document.getElementById('igual')

  var resultado = document.getElementById("resultado")

  reset.onclick = () => {
    console.log("AC");

    resultado.textContent = "";
    operador = "";
    operandoA = "0";
    operandoB = "";
  }
  signo.onclick = () => {
    console.log("signo");
    resultado.textContent = -resultado.textContent;
  }
  porcentaje.onclick = () => {
    console.log("porcentaje");
    operandoA = resultado.textContent;
    resultado.textContent = parseFloat(operandoA) / 100;
  }
  división.onclick = () => {
    operandoA = resultado.textContent;
    operador = "/";
    resultado.textContent = "";

  }




  siete.onclick = () => {
    console.log("7");

    resultado.textContent = resultado.textContent + "7";
  }

  ocho.onclick = () => {
    console.log("8");

    resultado.textContent = resultado.textContent + "8";
  }

  nueve.onclick = () => {
    console.log("9");

    resultado.textContent = resultado.textContent + "9";
  }
  multiplicación.onclick = () => {
    operandoA = resultado.textContent;
    operador = "*";
    resultado.textContent = "";
  }




  cuatro.onclick = () => {
    console.log("4");

    resultado.textContent = resultado.textContent + "4";
  }

  cinco.onclick = () => {
    console.log("5");

    resultado.textContent = resultado.textContent + "5";
  }
  seis.onclick = () => {
    console.log("6");

    resultado.textContent = resultado.textContent + "6";
  }
  resta.onclick = () => {
    operandoA = resultado.textContent;
    operador = "-";
    resultado.textContent = "";
  }





  uno.onclick = () => {
    console.log("1");

    resultado.textContent = resultado.textContent + "1";
  }
  dos.onclick = () => {
    console.log("2");

    resultado.textContent = resultado.textContent + "2";
  }
  tres.onclick = () => {
    console.log("3");

    resultado.textContent = resultado.textContent + "3";
  }
  suma.onclick = () => {
    operandoA = resultado.textContent;
    operador = "+";
    resultado.textContent = "";
  }




  cero.onclick = () => {
    console.log("0");

    resultado.textContent = resultado.textContent + "0";
  }
  coma.onclick = () => {
    console.log("coma");

    resultado.textContent = resultado.textContent + ".";
  }
  igual.onclick = () => {
    operandoB = resultado.textContent;
    solución = "";
    switch(operador){
      case "/":
          solución = parseFloat(operandoA) / parseFloat(operandoB);
          break;
      case "*":
          solución = parseFloat(operandoA) * parseFloat(operandoB);
          break;
      case "-":
          solución = parseFloat(operandoA) - parseFloat(operandoB);
          break;
      case "+":
          solución = parseFloat(operandoA) + parseFloat(operandoB);
          break;
    }
    resultado.textContent = solución;
  }
}
