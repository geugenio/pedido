function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

function moverbotao() {
    var button = document.getElementById('botaoNao');

    var containerWidth = document.body.clientWidth - button.clientWidth;
    var containerHeight = document.body.clientHeight - button.clientHeight;

    var newPositionLeft = getRandomPosition(containerWidth);
    var newPositionTop = getRandomPosition(containerHeight);

    button.style.left = newPositionLeft + 'px';
    button.style.top = newPositionTop + 'px';
}

document.getElementById('botaoNao').addEventListener('mouseover', moverbotao);