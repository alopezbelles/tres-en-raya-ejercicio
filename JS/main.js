// //Relación a imágenes//
// let element = document.getElementById('1');


// //LOCAL STORAGE//
// const jugador1 = "Alex";
// const jugador2 = "";
// localStorage.setItem("nombreUsuario", jugador1);



///ARRAYS///
//Arrays ganadoras//

// let arrayWinner = [[1,2,3],[4,5,6],,[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

//////////////////////////////////


let interruptor = true;


const marcarCasilla = (posicion) => {

    switch(posicion){
        case '1':
            if(caja1.innerHTML == ""){
                caja1.innerHTML = (interruptor) ?  `X` : `O`;
                interruptor = !interruptor;
            };
        break;

        case '2':
            if(caja2.innerHTML == ""){
                caja2.innerHTML = (interruptor) ? `X` : `O`;
                interruptor = !interruptor;
            };
        break;

        case '3':
            if(caja3.innerHTML == ""){
                caja3.innerHTML = (interruptor) ? `X` : `O`;
                interruptor = !interruptor;
            };
        break;

        case '4':
            if(caja4.innerHTML == ""){
                caja4.innerHTML = (interruptor) ? `X` : `O`;
                interruptor = !interruptor;
            };
        break;

        case '5':
            if(caja5.innerHTML == ""){
                caja5.innerHTML = (interruptor) ? `X` : `O`;
                interruptor = !interruptor;
            };
        break;

        case '6':
            if(caja6.innerHTML == ""){
                caja6.innerHTML = (interruptor) ? `X` : `O`;
                interruptor = !interruptor;
            };
        break;

        case '7':
            if(caja7.innerHTML == ""){
                caja7.innerHTML = (interruptor) ? `X` : `O`;
                interruptor = !interruptor;
            };
        break;

        case '8':
            if(caja8.innerHTML == ""){
                caja8.innerHTML = (interruptor) ? `X` : `O`;
                interruptor = !interruptor;
            };
        break;

        case '9':
            if(caja9.innerHTML == ""){
                caja9.innerHTML = (interruptor) ? `X` : `O`;
                interruptor = !interruptor;
            };
        break;

        default:
            console.log("error");
    };
};

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

