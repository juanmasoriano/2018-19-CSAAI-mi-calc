function main() {
  console.log("Que comiencen los juegos de JS");

  var siete = document.getElementById('siete')
  var ocho = document.getElementById('ocho')
  var nueve = document.getElementById('nueve')
  var división = document.getElementById('división')

  var cuatro = document.getElementById('cuatro')
  var cinco = document.getElementById('cinco')
  var seis = document.getElementById('seis')
  var multiplicación = document.getElementById('multiplicación')

  var uno = document.getElementById('uno')
  var dos = document.getElementById('dos')
  var tres = document.getElementById('tres')
  var suma = document.getElementById('suma')

  var cero = document.getElementById('cero')
  var igual = document.getElementById('igual')

  var resultado = document.getElementById("resultado")


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
  división.onclick = () => {
    console.log("/");

    var display = document.getElementById('display');
    display.innerHTML = "/"
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
  multiplicación.onclick = () => {
    console.log("*");

    var display = document.getElementById('display');
    display.innerHTML = "*"
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
    console.log("+");

    var display = document.getElementById('display');
    display.innerHTML = "+"
  }


  cero.onclick = () => {
    console.log("0");

    resultado.textContent = resultado.textContent + "0";
  }
  igual.onclick = () => {
    console.log("=");

    var display = document.getElementById('display');
    display.innerHTML = "="
  }
}