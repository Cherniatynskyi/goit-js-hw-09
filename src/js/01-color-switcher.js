const refs = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]')
}

const CHANGE_DELAY = 1000
var isStopActive = false

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.buttonStart.addEventListener('click', startRandomColorFlow)
refs.buttonStop.addEventListener('click', stoptRandomColorFlow)



function startRandomColorFlow() {
    
    isStopActive = false
    refs.buttonStart.setAttribute('disabled', '');
    refs.buttonStart.classList.remove(".button-switcher:hover")
    refs.buttonStop.removeAttribute('disabled');
    const intervalId = setInterval(() => {
        if (isStopActive === true) {
            clearInterval(intervalId);
            console.log("interval cleared")
            return
        }
        const randomColor = getRandomHexColor()
        document.body.style.backgroundColor = randomColor
    
    }, CHANGE_DELAY)
    
}

function stoptRandomColorFlow() {
    isStopActive = true
    console.log("stop click")
    refs.buttonStart.removeAttribute('disabled');
    refs.buttonStop.setAttribute('disabled', '');
}