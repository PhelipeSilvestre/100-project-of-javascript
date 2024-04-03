let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

let events = {
  mouse: {
    down: "mousedown",
    up: "mouseup",
    move: "mousemove",
  },
  touch: {
    down: "touchstart",
    up: "touchend",
    move: "touchmove",
  },
};

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {
  try {
    document.createEvent("touchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

gridButton.addEventListener("click", () => {
  container.innerHTML = "";
  let count = 0;
  for (let i = 0; i < gridHeight.value; i++) {
    count += 2;
    let div = document.createEvent("div");
    div.classList.add("gridRow");
  }
});
