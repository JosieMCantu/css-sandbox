const button = document.getElementById('button');
const sectionSpecial = document.getElementById('sectionSpecial');
const inputBox = document.getElementById('inputBox');

button.addEventListener('click', () => {
    sectionSpecial.textContent = inputBox.value;
    inputBox.value='';
});

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

button1.addEventListener('click', () => {
    document.getElementById('change').style.backgroundColor = 'pink';
}) 
button2.addEventListener('click', () => {
    document.getElementById('change').style.backgroundColor = 'lightgreen';
}) 
button3.addEventListener('click', () => {
    document.getElementById('change').style.backgroundColor = 'lightblue';
}) 