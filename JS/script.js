window.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[class="${e.keyCode}"]`)
    audio.play()
})
