var jugador;
var computadora;

function numeroCompu(){
    var numerito = Math.floor(Math.random()*3);
    switch(numerito){
            case 0:
                computadora = "piedra";
                break;
            case 1:
                computadora = "papel";
                break;
            case 2:
                computadora = "tijera";
                break;
        }
}
function clickPiedra(){
    boton = document.getElementById("piedra");
    jugador = boton.id
    numeroCompu();
    comparacion();
}

function clickPapel(){
    boton = document.getElementById("papel");
    jugador = boton.id;
    numeroCompu();
    comparacion();
}

function clickTijera(){
    boton = document.getElementById("tijera");
    jugador = boton.id;
    numeroCompu();
    comparacion();
}

function comparacion(){
    switch(jugador){
    case "piedra":
        switch (computadora){
            case "piedra":
                console.log("La computadora elige " + computadora + ": Es un empate");
                document.getElementById("resultado").innerHTML = "La computadora elige " + computadora + ": Es un empate";
                break;
            case "papel":
                console.log("La computadora elige " + computadora + ": Perdiste =(");
                document.getElementById("resultado").innerHTML = "La computadora elige " + computadora + ": Perdiste =(";
                break;
            case "tijera":
                console.log("La computadora elige " + computadora + ": Ganaste!!");
                document.getElementById("resultado").innerHTML = "La computadora elige " + computadora + ": Ganaste!!";
                break;
        }
    break;
    case "papel":
        switch (computadora){
            case "piedra":
                console.log("La computadora elige " + computadora + ": Ganaste!!");
                document.getElementById("resultado").innerHTML = "La computadora elige " + computadora + ": Ganaste!!";
                break;
            case "papel":
                console.log("La computadora elige " + computadora + ": Es un empate");
                document.getElementById("resultado").innerHTML = "La computadora elige " + computadora + ": Es un empate";
                break;
            case "tijera":
                console.log("La computadora elige " + computadora + ": Perdiste =(");
                document.getElementById("resultado").innerHTML = "La computadora elige " + computadora + ": Perdiste =(";
                break;
        }
    break;
    case "tijera":
        switch (computadora){
            case "piedra":
                console.log("La computadora elige " + computadora + ": Perdiste =(");
                document.getElementById("resultado").innerHTML = "La computadora elige " + computadora + ": Perdiste =(";
                break;
            case "papel":
                console.log("La computadora elige " + computadora + ": Ganaste!!");
                document.getElementById("resultado").innerHTML = "La computadora elige " + computadora + ": Ganaste!!";
                break;
            case "tijera":
                console.log("La computadora elige " + computadora + ": Es un empate");
                document.getElementById("resultado").innerHTML = "La computadora elige " + computadora + ": Es un empate";
                break;
        }
    break;
    }
}