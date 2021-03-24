var mapa = [0,0,0,0,0,0,0,0,0];
var finPartida = false;

function ficha(num){

    var numero = num;
    if (finPartida == false){
        if (comprobar(1, numero) == true){
            victoria();
            random();
            victoria();
        }else { alert ("No puedes escoger una posicion ya coloreada");}
    }
}

function random(){
    do{
        var jugada = false
        if (finPartida == true){ jugada = true;}
        var x = Math.floor((Math.random() * 10));
        console.log("el valor de x es: " + x);
        jugada = comprobar(-1, x);
    }while(!jugada);
    
}

function comprobar(jugador, posicion){
    console.log("Entro en la funcion con valor: " + posicion )
    if (mapa[posicion] == 0){
        console.log("dibujo en la posicion: " + posicion);
        if (jugador == 1){
            document.getElementById(posicion).style.backgroundColor = "red";
        }  else { document.getElementById(posicion).style.backgroundColor = "blue"; }
        mapa[posicion] = jugador; 
        return true;
    }else { return false; }
}

function victoria(){
    
    var r = ganador();
    switch(r){
     case 0:
      break;
     case 1:
      finPartida = true;
      window.alert("¡Ganó el rojo!");
      break;
     case -1:
      finPartida = true;
      window.alert("¡Ganó el azul!");
      break;
     case 2:
      finPartida = true;
      window.alert("¡Empate!");
      break; 
   }
}


function ganador(){
    
    var numEspacios=0;

    for(i=0; i<9; i++){ if(mapa[i] == 0) numEspacios++; }

    // Las líneas horizontales
    if(mapa[0] == mapa[1] && mapa[1] == mapa[2] && mapa[0] !=0) return mapa[0];
    if(mapa[3] == mapa[4] && mapa[4] == mapa[5] && mapa[3] !=0) return mapa[3];
    if(mapa[6] == mapa[7] && mapa[7] == mapa[8] && mapa[6] !=0) return mapa[6];
    //Las líneas verticales
    if(mapa[0] == mapa[3] && mapa[3] == mapa[6] && mapa[0] !=0) return mapa[0];
    if(mapa[1] == mapa[4] && mapa[4] == mapa[7] && mapa[1] !=0) return mapa[1];
    if(mapa[2] == mapa[5] && mapa[5] == mapa[8] && mapa[2] !=0) return mapa[2];
    //Las diagonales
    if(mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] !=0) return mapa[0];
    if(mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] !=0) return mapa[2];
    
    if (numEspacios > 0){ 
        return 0;
    } else { return 2; }
}

function reset(){

}