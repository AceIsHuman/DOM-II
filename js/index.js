// Your code goes here
function floatUp() {
    this.classList.toggle('float-up');
}

function redFontColor() {
    this.style.color = 'red';
}

const headers = document.querySelectorAll('h1, h2, h3, h4');
headers.forEach(elm => {
    elm.addEventListener('mouseover', floatUp);
    elm.addEventListener('mouseleave', floatUp);
});


const input = document.querySelectorAll('input');
input.forEach(elm => {
    elm.addEventListener('keydown', () => console.log('KEYS WERE PRESSED!'));
})

const textContent = document.querySelectorAll('p');
textContent.forEach(elm => elm.addEventListener('drag', function(){this.style.color = 'red'}));
textContent.forEach(elm => elm.addEventListener('dragend', function(){this.style.color = 'black'}));