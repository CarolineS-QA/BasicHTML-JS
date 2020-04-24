const fontButton = document.querySelector("#fonts");
const backgroundButton = document.querySelector("#bgColour");
const textButton = document.querySelector("#textColour");

const blueParagraph = document.querySelector("#blueText");

// Edited these functions to include switching back and forth
function blueToRed() {
    if (blueParagraph.style.color === "blue"){
    blueParagraph.style.color = "red";
    blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
    textButton.textContent = "Change red to blue";
    } else {
    blueParagraph.style.color = "blue";
    blueParagraph.textContent = blueParagraph.textContent.replace("red", "blue");
    textButton.textContent = "Change blue to red";
    }
};

const greenParagraphs = document.querySelectorAll(".greenBg");
console.log(greenParagraphs);

function greenToPink() {
  if(greenParagraphs[0].className === 'greenBg'){
    for (let greenParagraph of greenParagraphs) {
         greenParagraph.className = 'hotpinkBg';
         greenParagraph.textContent = greenParagraph.textContent.replace("green", "hotpink");
    }
  } else {
    for (let greenParagraph of greenParagraphs) {
      greenParagraph.className = 'greenBg';
      greenParagraph.textContent = greenParagraph.textContent.replace("hotpink", "green");
  }
  }
}

const tnrParagraph = document.querySelector("#tnrParagraph");

function tnrToArial() {
    if (tnrParagraph.style.fontFamily === "Times New Roman"){
    tnrParagraph.style.fontFamily = "arial";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
    fontButton.textContent = "Change Arial to Times New Roman";
    } else {
    tnrParagraph.style.fontFamily = "Times New Roman";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Arial", "Times New Roman");
    fontButton.textContent = "Change Times New Roman to Arial";
    }
}

// JS events and event listeners below
const mouseOver = (event) => {
    event.target.style.backgroundColor = "limegreen";
    if (event.target.textContent.indexOf("background") === -1) {
      event.target.textContent +=
        ", I have had my background changed on mouse over!";
    } else {
      event.target.textContent = event.target.textContent.replace("out", "over");
    }
  };

  tnrParagraph.addEventListener("mouseover", mouseOver);
  
  const mouseOut = (event) => {
    event.target.style.backgroundColor = "white";
    if (event.target.textContent.indexOf("background") === -1) {
      event.target.textContent +=
        ", I have had my background changed on mouse over";
    } else {
      event.target.textContent = event.target.textContent.replace("over", "out");
    }
  };

  tnrParagraph.addEventListener("mouseout", mouseOut);



const elementClick = event => { 
    event.target.style.backgroundColor = "white";
    event.target.textContent =
        "I have no event listeners attached now, click where listeners are enabled!";
    fontButton.removeEventListener('click', tnrToArial);
    event.target.removeEventListener('click', elementClick);
    event.target.removeEventListener('mouseover', mouseOver);
    event.target.removeEventListener('mouseout', mouseOut);
    console.log(event.target.id);
    if (event.target.id === 'tnrParagraph') {
        blueParagraph.textContent = "Event listeners enabled";
        blueParagraph.addEventListener('mouseover', mouseOver);
        blueParagraph.addEventListener('mouseout', mouseOut);
        blueParagraph.addEventListener('click', elementClick);
    }
    else {
        tnrParagraph.textContent = "Event listeners enabled";
        tnrParagraph.addEventListener('mouseover', mouseOver);
        tnrParagraph.addEventListener('mouseout', mouseOut);
        tnrParagraph.addEventListener('click', elementClick);
        fontButton.addEventListener('click', tnrToArial);
    }
}

tnrParagraph.addEventListener('click', elementClick);

// Instead of elementClick?
//   const mouseDown = event => { 
//     event.target.style.backgroundColor = "white";
//     event.target.textContent +=
//         ", I have no event listeners attached now";
// }

//adding eventListeners to buttons
fontButton.addEventListener('click', tnrToArial);
backgroundButton.addEventListener('click', greenToPink);
textButton.addEventListener('click', blueToRed);