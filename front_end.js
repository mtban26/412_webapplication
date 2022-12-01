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
    else {
        head4.innerText = "State: Tennessee";
        res2.innerText = "Number of Players Born in Tennessee" + ": " + TNplayers;
    }

}

const pname = document.getElementById('pname');
const bdate = document.getElementById('bdate');
const bplace = document.getElementById('bplace');
const debut = document.getElementById('debut');
function setPlayerInfo(){
    pname.innerText = "Player: " + document.getElementById('searchPlayer').value;
    bdate.innerText = "Birthdate: 07/05/1994";
    bplace.innerText = "Birthplace: Oshu, Japan";
    debut.innerText = "Debut Year: 2018";
}
