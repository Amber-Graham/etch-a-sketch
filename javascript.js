// Things we will need that the assignment is already telling us:
// create a webpage with 16x16 grid of square divs
// divs will be created using JS 
// put the square divs inside a large "container" div
// keep in mind: margins and borders may affect the square divs
// set up a hover effect so that the grid divs change color when 
    // your mouse passes over them, leaving a pixelated trail through
    // your grid like a pen would
// "Hovering" is what happens when your mouse enters a div and ends 
    // when your mouse leaves it. set up event listeners for these 
// add a class to the div to change the color (maybe use classList.add?)
// there will also be a reset button
// research button tags in html and how you can make a JS function 
    //run when one is clicked


// a function to create the grid
// a function to call the grid size
// an eventlistener for what button is being clicked which will determine color
// an eventlistener for if the mouse hovers over the square, then the color changes
// a function for when the reset button is clicked

let color = 'black';


function populateBoard(size) {
  const container = document.querySelector('.container');
  let squares = container.querySelectorAll('div');
  squares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size

  for(let i = 0 ; i< amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
    container.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
    if(input >=2 && input <= 100)
    populateBoard(input);
    else {
        alert('Please select a number between 2 and 100.')
    }
}

function colorSquare() {
    if(color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function reset() {
  const container = document.querySelector('.container');
  let squares = container.querySelectorAll('div');
  squares.forEach((div) => div.style.backgroundColor='white');
}



