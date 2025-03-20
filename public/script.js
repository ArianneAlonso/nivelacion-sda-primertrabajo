const textoo = document.getElementById('textoo');
const cambiador = document.getElementById('cambiador');

//mostrar contenido
textoo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        alert(textoo.value);
    }
});

//cambiar el color de la caja de texto y el texto
let colorIndex = 0;
const colors = [
    { background: 'white', color: 'black' },
    { background: 'black', color: 'white' },
    { background: 'lightblue', color: 'red' }
];
cambiador.addEventListener('click', () => {
    textoo.style.backgroundColor = colors[colorIndex].background;
    textoo.style.color = colors[colorIndex].color;
    colorIndex = (colorIndex + 1) % colors.length;
});
