const border = document.querySelector('.box');

const colors = ['#ff0000', '#1656f9', '#56f916', '#F97316']
let currentColorIndex = 0;

  setInterval(() => {
        border.style.borderColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        }, 3000)

console.log('Hello from Nerdbord!')
