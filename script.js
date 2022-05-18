const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];
var valoraleatorio = document.getElementById("randomWord");
var palabraIngresada = document.getElementById("texto");
var palabraSeleccionada;
var time = 14;
var score = 0;
let timeInterval = setInterval(actualizarTiempo, 1000);
const $inputFocusTexto = document.querySelector("#texto");

alert('!Obtén la mayor cantidad de puntos posibles!. Éxito');
addToDOM();
actualizarTiempo();
$inputFocusTexto.focus()

//Evento Keypress
palabraIngresada.addEventListener('keypress', function (e) {
    console.log(e);
    if (event.key == "Enter") {
        if (palabraIngresada.value == valoraleatorio.innerHTML) {
            console.log();
            document.getElementById("timeSpan").innerHTML = time += 2;
            document.getElementById("texto").value = '';
            updateScore();
            addToDOM();
        } else {
            palabraIngresada.value = '';
            addToDOM();
        }
    }
});

// Funciones
function randomWords() {
    var position = Math.floor(Math.random() * words.length);
    palabraSeleccionada = words[position]
}
function addToDOM() {
    randomWords();
    valoraleatorio.innerHTML = palabraSeleccionada;
}
function actualizarTiempo() {
    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    } else {
        time = time - 1;
        document.getElementById("timeSpan").innerHTML = time
    }
}
function updateScore() {
    score = score + 1;
    document.getElementById("score").innerHTML = score;
}
function gameOver() {
    var timeOut = "<br><br><h3> ** JUEGO FINALIZADO ** </h3>";
    var puntajeFinal = " <h3> SU PUNTAJE FINAL ES:  </h3>  " + `<h3>${document.getElementById("score").innerHTML} Puntos</h3>`;
    var botonTemporal = '<a class="boton_personalizado" onClick="window.location.reload();">Volver a empezar</a><br><br>';
    document.getElementById("end-game-container").innerHTML = timeOut + puntajeFinal + botonTemporal;
    document.querySelector(".main").innerHTML = '';
}




