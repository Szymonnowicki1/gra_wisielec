var haslo = "Manchester United";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var haslo1 = "";
var ile_skuch = 0;

for ( i = 0; i < dlugosc; i++) {

    if( haslo.charAt(i) == " "){
        haslo1 = haslo1 + " ";
    }
    else if( haslo.charAt(i)){
        haslo1 = haslo1 + "-"; 
    }
         
}

function wypisz_haslo() {

    document.getElementById("plansza").innerHTML=haslo1
}

var litry = new Array(35);

litry[0] ="A";
litry[1] ="Ą";
litry[2] ="B";
litry[3] ="C";
litry[4] ="Ć";
litry[5] ="D";
litry[6] ="E";
litry[7] ="Ę";
litry[8] ="F";
litry[9] ="G";
litry[10] ="H";
litry[11] ="I";
litry[12] ="J";
litry[13] ="K";
litry[14] ="L";
litry[15] ="Ł";
litry[16] ="M";
litry[17] ="N";
litry[18] ="Ń";
litry[19] ="O";
litry[20] ="Ó";
litry[21] ="P";
litry[22] ="Q";
litry[23] ="R";
litry[24] ="S";
litry[25] ="Ś";
litry[26] ="T";
litry[27] ="U";
litry[28] ="V";
litry[29] ="W";
litry[30] ="X";
litry[31] ="Y";
litry[32] ="Z";
litry[33] ="Ż";
litry[34] ="Ź";




function start() {

    var tresc_diva = "";

    for( i=0; i<35; i++){
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+ element +'">'+litry[i]+'</div>';
    }

    document.getElementById("alfabet").innerHTML=tresc_diva;
    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce,znak){
    if(miejsce > this.length - 1) {
        return this.toString();
    }
    else {
        return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
    }
}


function sprawdz(nr){

    var trafiona = false;

     for(i=0; i < dlugosc; i++){
        if(haslo.charAt(i) == litry[nr]){
            haslo1 = haslo1.ustawZnak(i,litry[nr]);
            trafiona = true;
        }
     }
     if(trafiona == true){
        var element = "lit" + nr;
        document.getElementById(element).style.backgroundColor = "green";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).style.border = "2px solid green";

        wypisz_haslo();
     }
     else{
        var element = "lit" + nr;
        document.getElementById(element).style.backgroundColor = "red";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).style.border = "2px solid red";
        document.getElementById(element).setAttribute("onclick",";");


        ile_skuch++;
        var obraz = "s" + ile_skuch + ".jpg";
        document.getElementById("wisielec").innerHTML = '<img src="'+obraz+'" alt="" />';

     }

      if(haslo == haslo1){
        document.getElementById("alfabet").innerHTML="Brawo wygrałeś!"+'<br></br><button id="przycisk" onclick="location.reload()">zagraj jeszcze raz</button>';
      }
      if(ile_skuch >= 9){
        document.getElementById("alfabet").innerHTML="Przegrałeś! Prawidłowe hasło to: "+haslo+'<br></br><button id="przycisk" onclick="location.reload()">zagraj jeszcze raz</button>';
      }
}

