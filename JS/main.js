// //Relación a imágenes//
// let element = document.getElementById('1');


// //LOCAL STORAGE//
// const jugador1 = "Alex";
// const jugador2 = "";
// localStorage.setItem("nombreUsuario", jugador1);



///ARRAYS///
//Arrays ganadoras//


const winConditions = {
    pos1: ["caja0","caja1","caja2"],
    pos2: ["caja3","caja4","caja5"],
    pos3: ["caja6","caja7","caja8"],
    pos4: ["caja0","caja3","caja6"],
    pos5: ["caja1","caja4","caja7"],
    pos6: ["caja2","caja5","caja8"],
    pos7: ["caja0","caja4","caja8"],
    pos8: ["caja2","caja4","caja6"],

};





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

if (("caja1"==="X") && ("caja2"==="X") && ("caja3"==="X")) {
    console.log("winner");
}



// let caja1 = document.getElementById("1");
// let caja2 = document.getElementById("2");
// let caja3 = document.getElementById("3");
// let caja4 = document.getElementById("4");
// let caja5 = document.getElementById("5");
// let caja6 = document.getElementById("6");
// let caja7 = document.getElementById("7");
// let caja8 = document.getElementById("8");
// let caja9 = document.getElementById("9");








//Capturamos en un array todos los elementos.
// let casillas = Array.from(document.getElementsByClassName("rectangulo"));


//Hemos usado map porque nos permite tratar a cada elemento 
//del array casillas como un objeto (propiedades + metodos);

// let interruptor = true;

// casillas.map((casilla, /*index*/) => {
//     casilla.addEventListener("click", () => {
//         if (casilla.innerHTML == "") {
//             casilla.innerHTML = (interruptor) ? "X" : "O";
//             interruptor = !interruptor;

//             //Comprobamos en otra funcion si hay un ganador.......


//         };
//     });
// });

