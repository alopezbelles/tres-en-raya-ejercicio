// //Relación a imágenes//
// let element = document.getElementById('1');


//Esto de a continuación es del ejemplo de youtube//

let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("cuadrado"));

let gameState = ["", "", "", "", "", "", "", "", ""];

let gameActive = true;

let currentPlayer = "O;"

///ARRAYS///
//Arrays ganadoras//


const winConditions = {
    pos1: [0,1,2],
    pos2: [3,4,5],
    pos3: [6,7,8],
    pos4: [0,3,6],
    pos5: [1,4,7],
    pos6: [2,5,8],
    pos7: [0,4,8],
    pos8: [2,4,6],

};


const O_TEXT = "O";
const X_TEXT = "X";
let actualPlayer = X_TEXT;

console.log(O_TEXT)



// //LOCAL STORAGE//
// const jugador1 = "Alex";
// const jugador2 = "";
// localStorage.setItem("nombreUsuario", jugador1);








// let player1Mark = `X`;
// let player2Mark = `O`;


const cells = document.querySelectorAll(".cuadrado");
const statusText = document.querySelector("#statusText")


//////////////////////////////////


let interruptor = true;


const marcarCasilla = (posicion) => {

    switch(posicion){
        case '0':
            if(caja0.innerHTML == ""){
                caja0.innerHTML = (interruptor) ?  `<h1>X</h1>` : `<h1>O</h1>`;
                interruptor = !interruptor;
            };
        break;

        case '1':
            if(caja1.innerHTML == ""){
                caja1.innerHTML = (interruptor) ? `<h1>X</h1>` : `<h1>O</h1>`;
                interruptor = !interruptor;
            };
        break;

        case '2':
            if(caja2.innerHTML == ""){
                caja2.innerHTML = (interruptor) ? `<h1>X</h1>` : `<h1>O</h1>`;
                interruptor = !interruptor;
            };
        break;

        case '3':
            if(caja3.innerHTML == ""){
                caja3.innerHTML = (interruptor) ? `<h1>X</h1>` : `<h1>O</h1>`;
                interruptor = !interruptor;
            };
        break;

        case '4':
            if(caja4.innerHTML == ""){
                caja4.innerHTML = (interruptor) ? `<h1>X</h1>` : `<h1>O</h1>`;
                interruptor = !interruptor;
            };
        break;

        case '5':
            if(caja5.innerHTML == ""){
                caja5.innerHTML = (interruptor) ? `<h1>X</h1>` : `<h1>O</h1>`;
                interruptor = !interruptor;
            };
        break;

        case '6':
            if(caja6.innerHTML == ""){
                caja6.innerHTML = (interruptor) ? `<h1>X</h1>` : `<h1>O</h1>`;
                interruptor = !interruptor;
            };
        break;

        case '7':
            if(caja7.innerHTML == ""){
                caja7.innerHTML = (interruptor) ? `<h1>X</h1>` : `<h1>O</h1>`;
                interruptor = !interruptor;
            };
        break;

        case '8':
            if(caja8.innerHTML == ""){
                caja8.innerHTML = (interruptor) ? `<h1>X</h1>` : `<h1>O</h1>`;
                interruptor = !interruptor;
            };
        break;

        default:
            console.log("error");
    };
};




///////////////////////////

// if (("caja1"==="X") && ("caja2"==="X") && ("caja3"==="X")) {
//     console.log("winner");
// }



///BOTON REINICIAR PARTIDA///

restartBtn.addEventListener('click', restart);

function restart() {
    spaces.fill(null);

    boxes.forEach( cuadrado => {
        cuadrado.innerText = "";
    })

    currentPlayer = X_TEXT;
}

startGame();

///////////////////////////////










