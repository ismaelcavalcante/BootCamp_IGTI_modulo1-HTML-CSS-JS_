window.addEventListener('load', start);

function start() {
  var colorRed = document.querySelector('#colorRed');
  var colorGreen = document.querySelector('#colorGreen');
  var colorBlue = document.querySelector('#colorBlue');

  colorRed.addEventListener('change', choiceRed);
  colorGreen.addEventListener('change', choiceGreen);
  colorBlue.addEventListener('change', choiceBlue);
}

function choiceRed(event) {
  var valueRed = document.querySelector('#txtRed');
  valueRed.value = event.target.value;
  resultColor();
}

function choiceGreen(event) {
  var valueGreen = document.querySelector('#txtGreen');
  valueGreen.value = event.target.value;
  resultColor();
}

function choiceBlue(event) {
  var valueBlue = document.querySelector('#txtBlue');
  valueBlue.value = event.target.value;
  resultColor();
}

function resultColor() {
  var colorRed = document.querySelector('#colorRed').value;
  var colorGreen = document.querySelector('#colorGreen').value;
  var colorBlue = document.querySelector('#colorBlue').value;
  var colorResult = document.querySelector('#colorResult');
  colorResult.style.backgroundColor = `rgb(
    ${colorRed},${colorGreen}, ${colorBlue}
  )`;
}
