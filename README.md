# tres-en-raya-ejercicio
Ejercicio técnico semana 3 y 4, juego tic tac toe 


### Datos generales

**- Autor del proyecto:** Alejandro López Bellés
**- Título del proyecto:** Ejercicio técnico 3 - Juego TIK TAK TOE
**- Fecha:** 16/10/2022

- Lenguajes utilizados : 
 - HTML5
 - CSS
 - BOOSTRAP
 - JAVASCRIPT

### Descripción general del proyecto 

El siguiente ejercicio consiste en el diseño y maquetación del juego 3 en raya. El juego está pensado para dos jugadores y consiste en que cada jugador tiene un tipo de fichas, las "X" y las "O". El primer jugador que consiga alinear en posición vertical, horizontal o diagonal 3 fichas iguales, gana la partida.

Las páginas del juego están estructuradas de la suiguiente manera:

**PÁGINA BIENVENIDA / INDEX**

La primera página es la página de bienvenida. En ella encontramos el mensaje de bienvenida e introducción al juego en un recuadro central junto con un botón que dará lugar a la suigente página: selección de jugadores. 

![index-page](https://user-images.githubusercontent.com/113507322/196047551-e312ab07-a03e-4e5b-a99a-931a7f610b75.png)


**SELECCIÓN DE JUGADORES**

La segunda página es la de selección de jugadores. Sigue la misma estética que la pantalla anterior. En esta, en el recuadro central se introducirá el nombre del JUGADOR 1 y el nombre del JUGADOR 2. También se podrá seleccionar la naturaleza de ambos jugadores (humano-cpu).

El botón de "A jugar" dará paso a la siguiente página. Bajo del botón, un texto con enlace nos permitirá volver a la pantalla anterior: a de bienvenida. 

![selection-page](https://user-images.githubusercontent.com/113507322/196047796-797d61b9-9a68-47a5-b8fc-a05eedded88d.png)


**PANTALLA DE JUEGO**

La tercera página es la pantalla del juego. En ella se ubica el tablero del juego que es un 'grid' de 9 casillas con 8 posiciones ganadoras (tres casillas en horizontal, 3 en vertical, o las dos diagonales). 

Bajo del tablero de juego se encuentran los cuadros de texto que marcará en sombreado negro el turno del jugador, con los nombres introducidos en la pantalla anterior. 

Bajo de los indicadores del turno, un botón de 'RESTART' que vaciará el tablero y reiniciará la partida.

Por último, otro botón con la opción de 'Volver a selección de jugadores' que nos permitirá volver a introducir el nombre de los contrincantes. 

![game-page](https://user-images.githubusercontent.com/113507322/196048110-3573b648-dcc2-4f70-af66-71ec62097318.png)

A medida que se van pulsando las casillas del tablero principal, se van colocando las fichas en el orden de turno de los jugadores. El jugador 1 y por tanto el primer turno siempre empezará colocando las fichas 'X'. El jugador 2 colocará las fichas 'O'.

![game-page2](https://user-images.githubusercontent.com/113507322/196048120-291c5bf9-6557-491c-8293-c855cf29a286.png)


**PANTALLA DE GANADOR**

Una vez uno de los jugadores ha conseguido alinear 3 de sus fichas en una de las posiciones ganadoras, salta la pantalla del ganador. Como en las otras, un cuadro central da la enhorabuena al ganador. En este momento, con el botón 'Nuevo juego' podemos volver a la segunda pantalla, la de selección de jugadores, para volver a introducir el nombre de los jugadores.

![winner-page](https://user-images.githubusercontent.com/113507322/196048515-036478d9-481d-40e2-af60-b413b018c523.png)


