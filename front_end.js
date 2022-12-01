/*
    Created by Micah Ban and Ricardo Jardinez Morales
 */
const head4 = document.getElementById('result');
const res2 = document.getElementById('players');
var TNplayers = 26;
var HIplayers = 7;
function setPlayers(){
    const myText = document.getElementById('searchState').value;
    if (myText === "Hawaii"){
        head4.innerText = "State: " + myText;
        res2.innerText = "Number of Players Born in " + myText + ": " + HIplayers;
    }
    else if (myText === "Tenn") {
        head4.innerText = "State: Tennessee";
        res2.innerText = "Number of Players Born in Tennessee" + ": " + TNplayers;
    }
    else {
        head4.innerText = "Invalid Input for a US State";
    }

}

const pname = document.getElementById('pname');
const bdate = document.getElementById('bdate');
const bplace = document.getElementById('bplace');
const debut = document.getElementById('debut');
function setPlayerInfo(){
    const myText = document.getElementById('searchPlayer').value;
    if (myText === "Shohei Otani"){
        pname.innerText = "Player: " + myText;
        bdate.innerText = "Birthdate: 07/05/1994";
        bplace.innerText = "Birthplace: Oshu, Japan";
        debut.innerText = "Debut Year: 2018";
    }
    else if (myText === "Aaron Judge"){
        pname.innerText = "Player: " + myText;
        bdate.innerText = "Birthdate: 04/26/1992";
        bplace.innerText = "Birthplace: Sacramento, California";
        debut.innerText = "Debut Year: 2016";
    }
    else if (myText === "Trea Turner"){
        pname.innerText = "Player: " + myText;
        bdate.innerText = "Birthdate: 06/30/1993";
        bplace.innerText = "Birthplace: Boynton Beach, Florida";
        debut.innerText = "Debut Year: 2015";
    }
    else {
        pname.innerText = "Player is not currently active.";
    }

}
