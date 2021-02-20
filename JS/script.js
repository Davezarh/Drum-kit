const playSound = (e) =>{
    const key = document.querySelector(`.section__key[data-key="${e.keyCode}"]`) 
    const audio = document.querySelector(`audio[class="${e.keyCode}"]`)
    key.classList.add("section__key--play")
    audio.play()
    audio.currentTime = 0; 
}
function removeTransition(e){
    if(e.propertyName !== "transform") return
    this.classList.remove("section__key--play");
}
const keys = document.querySelectorAll(".section__key")
keys.forEach(key => key.addEventListener("transitionend",removeTransition))

window.addEventListener('keydown',playSound)