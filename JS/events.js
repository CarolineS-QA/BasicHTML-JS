// Add code here for part 5-7


// Do not change the code between here and the next comment
const blueParagraph = document.querySelector("#blueText");

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

function greenToPink() {
    for (let greenParagraph of greenParagraphs) {
        greenParagraph.className = 'hotpinkBg';
        greenParagraph.textContent = greenParagraph.textContent.replace("green", "hotpink");
    }
}

const tnrParagraph = document.querySelector("#tnrParagraph");

function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}

// Add the event handlers for mouse over, mouse out and click on tnrParagraph here and register them

const fontButton = document.querySelector("#fonts");
const backgroundButton = document.querySelector("#bgColour");
const textButton = document.querySelector("#textColour");

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