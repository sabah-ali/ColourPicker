//change id 
const button = document.querySelector('#change');

//colour id
const colour = document.querySelector('#colour');

const body = document.body;

button.addEventListener('click',changeColour);


function changeColour(){
    console.log('it works');
    const col1 = getRandomHexcode();
    const colourString = `hex(${col1})`;
    colour.innerHTML = "#" + colourString;
}

function getRandomHexcode(){
    var letters = '0123456789ABCDEF'.split('');
    var colour = '#';
    for (var i = 0; i < 6; i++ ) {
        colour += letters[Math.round(Math.random() * 15)];
    }
    body.style.backgroundColor = colour;
    return colour;
}

