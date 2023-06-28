const tryLuck = document.querySelector('#tryLuck');
const tryAgain = document.querySelector('#tryAgain');
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = Math.floor(4*Math.random())


//Eventos
tryLuck.addEventListener('click', handleTry)
tryAgain.addEventListener('click' , handleResetClick)
document.addEventListener('keydown', keyEnter)

// Funções
function handleTry(event){
    event.preventDefault()  // não faz o padrão
    toggleScreen()
    getphrase()
    background()
}
function handleResetClick(){
    toggleScreen()
    randomNumber = Math.floor(4*Math.random())
    background()
}
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
} 
function getphrase (){
    var luck_text = new Array ();
    luck_text[0] = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.";
    luck_text[1] = "A vida trará coisas boas se tiver paciência.";
    luck_text[2] = "Siga os bons e aprenda com eles.";
    luck_text[3] = "Quem olha para fora sonha; quem olha para dentro acorda.";
    var text = randomNumber
    screen2.querySelector("p").innerText = `${luck_text[text]}`;
    }
function background(){
    document.querySelector("body").classList.toggle('screenColorTwo')
}
















  




function keyEnter(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
    }
}