window.addEventListener('keydown', (event)=>{
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
    const keys = document.querySelectorAll('.key')
    if(!audio){
        return
    }
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
    keys.forEach(key=>key.addEventListener('transitionend',removeTransition))
    

})

function removeTransition(e){
    console.log(`removed `)
    if(e.propertyName != 'transform') return
    this.classList.remove('playing')
} 