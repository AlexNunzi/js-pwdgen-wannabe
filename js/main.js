alert("Stai per generare la tua password e ti chiederemo di inserire il tuo nome, il tuo cognome ed il tuo colore preferito");
const userName = prompt("Digita il tuo nome:");
const userSurname = prompt("Digita il tuo cognome:");
const choosenColor = prompt("Digita il tuo colore preferito:")
const currentYear = "23";


// Risoluzione classica dell'esercizio
// const passGenerator = userName + userSurname + choosenColor + currentYear;
// document.getElementById("pass").innerHTML = passGenerator;


// Risoluzione dell'esercizio tramite template literals
document.getElementById("pass").innerHTML = `${userName}${userSurname}${choosenColor}${currentYear}`;


function copyOnClick(){
let content = document.createRange();
content.selectNode(document.getElementById("pass"));
window.getSelection().removeAllRanges();
window.getSelection().addRange(content);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}