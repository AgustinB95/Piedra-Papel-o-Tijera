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

function resultadoEmpate(resultado){
    console.log("La computadora elige " + resultado + ": Es un empate");
    document.getElementById("resultado").innerHTML = "LA COMPUTADORA ELIGE " + resultado.toUpperCase() + ": EMPATE";
    document.getElementById('background').style.backgroundColor = "rgb(142,142,231)";
}

function resultadoDerrota(resultado){
    console.log("La computadora elige " + resultado + ": Perdiste =(");
    document.getElementById("resultado").innerHTML = "LA COMPUTADORA ELIGE " + resultado.toUpperCase() + ": PERDISTE =(";
    document.getElementById('background').style.backgroundColor = "red";
}

function resultadoVictoria(resultado){
    console.log("La computadora elige " + resultado + ": Ganaste!!");
    document.getElementById("resultado").innerHTML = "LA COMPUTADORA ELIGE " + resultado.toUpperCase() + ": GANASTE!!";
    document.getElementById('background').style.backgroundColor = 'rgb(103, 255, 15)';
}

function comparacion(){
    switch(jugador){
    case "piedra":
        switch (computadora){
            case "piedra":
                resultadoEmpate(computadora);
                break;
            case "papel":
                resultadoDerrota(computadora);
                break;
            case "tijera":
                resultadoVictoria(computadora);
                break;
        }
    break;
    case "papel":
        switch (computadora){
            case "piedra":
                resultadoVictoria(computadora);
                break;
            case "papel":
                resultadoEmpate(computadora);
                break;
            case "tijera":
                resultadoDerrota(computadora);
                break;
        }
    break;
    case "tijera":
        switch (computadora){
            case "piedra":
                resultadoDerrota(computadora);
                break;
            case "papel":
                resultadoVictoria(computadora);
                break;
            case "tijera":
                resultadoEmpate(computadora);
                break;
        }
    break;
    }
}

function clickPiedra(){
    boton = document.getElementById("piedra");
    jugador = boton.id
    numeroCompu();
    comparacion();
    document.getElementById('piedra').style.backgroundColor = "blue";
    document.getElementById('piedra').style.color = "black"
    document.getElementById('papel').style.backgroundColor = "black";
    document.getElementById('papel').style.color = "white"
    document.getElementById('tijera').style.backgroundColor = "black";
    document.getElementById('tijera').style.color = "white"
    
}

function clickPapel(){
    boton = document.getElementById("papel");
    jugador = boton.id;
    numeroCompu();
    comparacion();
    document.getElementById('piedra').style.backgroundColor = "black";
    document.getElementById('piedra').style.color = "white"
    document.getElementById('papel').style.backgroundColor = "blue";
    document.getElementById('papel').style.color = "black"
    document.getElementById('tijera').style.backgroundColor = "black";
    document.getElementById('tijera').style.color = "white"
}

function clickTijera(){
    boton = document.getElementById("tijera");
    jugador = boton.id;
    numeroCompu();
    comparacion();
    document.getElementById('piedra').style.backgroundColor = "black";
    document.getElementById('piedra').style.color = "white"
    document.getElementById('papel').style.backgroundColor = "black";
    document.getElementById('papel').style.color = "white"
    document.getElementById('tijera').style.backgroundColor = "blue";
    document.getElementById('tijera').style.color = "black"
}



