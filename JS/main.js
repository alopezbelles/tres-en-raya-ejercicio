// //Relación a imágenes//
// let element = document.getElementById('1');


//Esto de a continuación es del ejemplo de youtube//

let playerTextX = document.getElementById("playerTextX");
let playerTextO = document.getElementById("playerTextO");

let boxes = Array.from(document.getElementsByClassName("cuadrado"));

let gameState = ["", "", "", "", "", "", "", "", ""];

let gameActive = true;

///ARRAYS///
//Arrays ganadoras//
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


const O_TEXT = "O";
const X_TEXT = "X";
let actualPlayer = X_TEXT;



// //LOCAL STORAGE//
// const jugador1 = "Alex";
// const jugador2 = "";
// localStorage.setItem("nombreUsuario", jugador1);


// let player1Mark = `X`;
// let player2Mark = `O`;


const cells = document.querySelectorAll(".cuadrado");
const statusText = document.querySelector("#statusText")


//////////////////////////////////


let turnoX = true;


const onBoxChecked = (position) => {

    console.log("onBoxChecked: " + position + " currentValue: " + gameState[position])

    if(gameState[position] === "") {
        checkBox(position);
        checkWinningCondition();
        nextPlayer();
    }
};

function restart() {
    gameState = ["", "", "", "", "", "", "", "", ""];

    boxes.forEach( cuadrado => {
        cuadrado.innerHTML = "";
    })
}

function startGame() {
    // recuperar nombres desde storage
    // modificar contenido de playerTextX y playerTextO (Turno de Pepito)
    // let nombreX = localStorage.getItem("nombreX");
    // let nombreO = localStorage.getItem("nombreO");
    let nombreX = "PEPITO";
    let nombreO = "JUANITO";

    turnoX = true;

    playerTextX.innerHTML = "TURNO DE " + nombreX;
    playerTextO.innerHTML = "TURNO DE " + nombreO;
    if(turnoX) {
        playerTextX.className = "turno-jugador";
        playerTextO.className = "turno-jugador-otro";
    } else {
        playerTextX.className = "turno-jugador-otro";
        playerTextO.className = "turno-jugador";
    }

    restart();
}

function checkBox(position) {

    //gameState[position] = turnoX ? "X" : "0";

    if(turnoX) {
        gameState[position] = "X";
    } else {
        // turno O
        gameState[position] = "0";
    }

    switch(position) {
        case 0:
            caja0.innerHTML = turnoX ? `<h1>X</h1>` : `<h1>0</h1>`;
            break;
        case 1:
            caja1.innerHTML = turnoX ? `<h1>X</h1>` : `<h1>0</h1>`;
            break;
        case 2:
            caja2.innerHTML = turnoX ? `<h1>X</h1>` : `<h1>0</h1>`;
            break;
        case 3:
            caja3.innerHTML = turnoX ? `<h1>X</h1>` : `<h1>0</h1>`;
            break;
        case 4:
            caja4.innerHTML = turnoX ? `<h1>X</h1>` : `<h1>0</h1>`;
            break;
        case 5:
            caja5.innerHTML = turnoX ? `<h1>X</h1>` : `<h1>0</h1>`;
            break;
        case 6:
            caja6.innerHTML = turnoX ? `<h1>X</h1>` : `<h1>0</h1>`;
            break;
        case 7:
            caja7.innerHTML = turnoX ? `<h1>X</h1>` : `<h1>0</h1>`;
            break;
        case 8:
            caja8.innerHTML = turnoX ? `<h1>X</h1>` : `<h1>0</h1>`;
            break;
        default:
            console.log("Wrong value");
            break;
    }

    console.log(gameState);
}

function checkWinningCondition() {
    for(let i=0; i<winConditions.length; i++) {
        let element = winConditions[i]; //i=0 -> [0,1,2]

        let position1 = element[0]; //[0,1,2] -> 0
        let position2 = element[1]; //[0,1,2] -> 1
        let position3 = element[2]; //[0,1,2] -> 2
        
        let valueInPosition1 = gameState[position1]; // gameState[0]
        let valueInPosition2 = gameState[position2]; // gameState[1]
        let valueInPosition3 = gameState[position3]; // gameState[2]

        if(valueInPosition1 === valueInPosition2 && valueInPosition2 == valueInPosition3 && valueInPosition1 !== "") {
            let winner = valueInPosition1;
            console.log("Winner found!: " + winner);

            window.location.href = "./winner.html"
            restart();
            break;
        }
    };
}

function nextPlayer() {
    // turnoX = !turnoX;

    if(turnoX) {
        turnoX = false;
    } else {
        // turnoX es false
        turnoX = true;
    }

    if(turnoX) {
        playerTextX.className = "turno-jugador";
        playerTextO.className = "turno-jugador-otro";
    } else {
        playerTextX.className = "turno-jugador-otro";
        playerTextO.className = "turno-jugador";
    }
}

startGame();

///////////////////////////////










