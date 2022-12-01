/*
    Created by Micah Ban and Ricardo Jardinez Morales
 */
const head4 = document.getElementById('result');
const res2 = document.getElementById('players');
//var ans = localStorage.getItem("values");
function setPlayers(){
    const myText = document.getElementById('searchState').value;
    head4.innerText = "State: " + myText;
    res2.innerText = "Number of Players Born in " + myText + ": ";
}
