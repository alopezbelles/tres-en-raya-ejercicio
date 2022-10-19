function showImputs(){
    let idPlayer1 = document.getElementById("idPlayer1").value;
    let idPlayer2 = document.getElementById("idPlayer2").value;

    let idNaturePlayer1 = document.getElementById("idNaturePlayer1").value;
    let idNaturePlayer2 = document.getElementById("idNaturePlayer2").value;

    window.sessionStorage.setItem("Nombre1", idPlayer1);
    window.sessionStorage.setItem("Nombre2", idPlayer2);

    window.sessionStorage.setItem("Nature1", idNaturePlayer1);
    window.sessionStorage.setItem("Nature2", idNaturePlayer2);


    console.log("Nombre jugador 1"+ idPlayer1 + "Nombre jugador 2"+ idPlayer2);

    


}

