const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

const trafficLight = (event) => {
    turOn[event.target.id]();
}

const nextIndex = () => {
    if ( colorIdex < 2){
        colorIdex
    }
}

const changColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIdex];
    turOn[color]();
    nextIndex();
}
const turOn = {
    'red': () => img.src = './img/vermelho.jpg',
    'yellow': () => img.src = './img/amarelo.jpg',
    'green': () => img.src = './img/verde.jpg',
    
}

buttons.addEventListener('click', trafficLight);