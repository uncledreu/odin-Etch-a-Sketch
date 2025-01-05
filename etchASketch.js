const gridContainer = document.querySelector(".container");
const columns = document.querySelectorAll(".column");
const buttons = document.querySelectorAll('button');

// default grid

function defaultGrid(){
  for(let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    gridContainer.appendChild(row);
    for(let k = 0; k < 16; k++) {
        let column = document.createElement('div');
        column.classList.add('column')
        row.appendChild(column)
      }
  }
}

// Set the default mouseover color to black 

function defaultColor() {
  const columns = document.querySelectorAll(".column");
  for (let i = 0; i < columns.length; i++) {
      columns[i].addEventListener("mouseover", (event) =>{
        event.target.style.backgroundColor = "black";
      })
  }
}

// generate random values for red green and blue.

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256); 

  return `rgb(${r}, ${g}, ${b})`; // Return RGB string
}

// mouseover random color 
function rgbColorMouseover() {
  const columns = document.querySelectorAll(".column");
  for (let i = 0; i < columns.length; i++) {
      //columns[i].addEventListener("mouseover", changeColor);
      columns[i].addEventListener("mouseover", (event) =>{
        //event.target.style.backgroundColor = "black";
        event.target.style.backgroundColor = getRandomRGBColor();
      })
  }
}

// create new grid based on input value
// Number.isInteger(Number(userNum)) && userNum > 0 && userNum <101

function userGrid(){
  let validation = false;
  while(validation == false){
    userInput = prompt("Enter a number between 0 and 100")
    if(!Number.isInteger(Number(userInput))){
      continue 
    }
    if(userInput > 0 && userInput <101){
      validation = true;
      gridContainer.innerHTML = ''; 
      for(let i = 0; i < userInput; i++) {
        // create row
        let row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);
        // create column
        for(let k = 0; k < userInput; k++) {
            let column = document.createElement('div');
            column.classList.add('column')
            row.appendChild(column)
          }
      }
    }

  }
  defaultColor();
}

// execute other function based on the button

function mainExecute(buttonValue){
  if(buttonValue == "rgbColor"){
    rgbColorMouseover();
  }else if(buttonValue =="newGrid"){
    userGrid();
  }else if(buttonValue == "reset"){
    gridContainer.innerHTML = '';
    defaultGrid()
    defaultColor();
  }
}


//get button value

function activateButton(){
  buttons.forEach(button => {
    button.addEventListener('click', ()=> {
      console.log(button.value);
      mainExecute(button.value);
    })
  })
}

// active the button and default grid setting at after page open or reload

function main(){
  activateButton();
  defaultGrid();
  defaultColor();
}

main();