const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15

let passwordOne = document.getElementById("password-one-el")
let passwordTwo = document.getElementById("password-two-el")

function getRandomChar(){
    let num= Math.floor(Math.random()*passwordLength);
    return characters[num];   
}
function randomPassword(){
    let password=""
    for(let i=0;i<passwordLength;i++)
        {
            password+=getRandomChar;
        }
    return password;
}
function generatePassword(){
passwordOne.textContent()=randomPassword();
passwordTwo.textContent()=randomPassword();
}