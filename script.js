function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

let alertaUmPressionado = false;

function moverbotao() {
  var button = document.getElementById("botaoNao");

  var containerWidth = document.body.clientWidth - button.clientWidth;
  var containerHeight = document.body.clientHeight - button.clientHeight;

  var newPositionLeft = getRandomPosition(containerWidth);
  var newPositionTop = getRandomPosition(containerHeight);

  button.style.left = newPositionLeft + "px";
  button.style.top = newPositionTop + "px";
}

document.getElementById("botaoNao").addEventListener("mouseover", moverbotao);

var botao = document.getElementById("botaoSim");

function alerta() {
  if (!alertaUmPressionado) {
    const fogos1 = new Audio("midia/fogos1.mp3");
    const fogos2 = new Audio("midia/fogos2.mp3");
    fogos1.play();
    fogos2.play();

    var newh1 = document.createElement("h2");
    var texto = document.createTextNode("Parabéns! INFO4M te ama");
    newh1.appendChild(texto);
    document.body.appendChild(newh1);

    var newh3 = document.createElement("h3");
    var texto2 = document.createTextNode("Sua alma pertence a informática");

    newh3.appendChild(texto2);
    document.body.appendChild(newh3);

    alertaUmPressionado = true;
  }
}

function alerta2() {
  alert("Assim não vale!");
}

botao.addEventListener("click", alerta);
