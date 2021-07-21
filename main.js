const main = document.querySelector('.main')
const btn = document.querySelector('.btn')

let colors = ['#f2ff00', '#aa00ff', '#053321', '#555', '#850909']

btn.addEventListener('click', changecolor)

function changecolor(){
    const colorindex = parseInt(Math.random() *colors.length);
    main.style.backgroundColor = colors[colorindex];
}
