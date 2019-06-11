// Your code goes here
function floatUp() {
    this.classList.toggle('float-up');
}

const headers = document.querySelectorAll('h1, h2, h3, h4');
headers.forEach(elm => {
    elm.addEventListener('mouseover', floatUp);
    elm.addEventListener('mouseleave', floatUp);
});


const input = document.querySelectorAll('input');
input.forEach(elm => elm.addEventListener('keydown', () => console.log('KEYS WERE PRESSED!')));
input.forEach(elm => elm.addEventListener('focus', function(){this.style.background = 'rgba(23, 162, 184, 0.5)'}));
input.forEach(elm => elm.addEventListener('blur', function(){this.style.background = ''}));

const textContent = document.querySelectorAll('p');
textContent.forEach(elm => elm.addEventListener('drag', function(){this.style.color = 'red'}));
textContent.forEach(elm => elm.addEventListener('dragend', function(){this.style.color = 'black'}));

const mainHeader = document.querySelector('header.intro');
mainHeader.addEventListener('mousedown', function(){this.classList.toggle('drop-shadow')});

const headerImg = document.querySelector('img');
headerImg.addEventListener('mousedown', function(){
    event.stopPropagation();
    this.style.display = 'none'
});

this.addEventListener('load', () => alert('THE PAGE HAS LOADED!'));

const body = document.querySelector('body');
function breakPage() {
    body.style.display = 'none';
    alert('Deleting page content...');
}

body.addEventListener('dblclick', breakPage);

let nav = document.querySelectorAll('.nav a');
nav.forEach(elm => elm.addEventListener('click', () => event.preventDefault()));