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
    let div = document.createElement("div");
    div.classList.add("gridRow");

    for (let j = 0; j < gridHeight.value; j++) {
      count += 2;
      let col = document.createElement("div");
      col.classList.add("gridCol");
      col.setAttribute("id", `gridCol${count}`);
      col.addEventListener(events[deviceType].down, () => {
        draw = true;
        if (erase) {
          col.style.backgroundColor = "transparent";
        } else {
          col.style.backgroundColor = colorButton.value;
        }
      });

      col.addEventListener(events[deviceType].move, (e) => {
        let elementID = document.elementFromPoint(
          !isTouchDevice() ? e.clientX : e.changedTouches[0].clientX,
          !isTouchDevice() ? e.clientY : e.changedTouches[0].clientY
        ).id;
        checker(elementID);
      });

      addEventListener(events[deviceType].up, () => {
        draw = false;
      });

      div.appendChild(col);
    }

    container.appendChild(div);
  }
});

function checker(elementId) {
  let gridColumns = document.querySelectorAll(".gridCol");
  gridColumns.forEach((element) => {
    if (elementId == element.id) {
      if (draw && !erase) {
        element.style.backgroundColor = colorButton.value;
      } else if (draw && erase) {
        element.style.backgroundColor = "transparent";
      }
    }
  });
}

clearGridButton.addEventListener("click", () => {
  container.innerHTML = "";
});

eraseBtn.addEventListener("click", () => {
  erase = true;
});

paintBtn.addEventListener("click", () => {
  erase = false;
});

gridWidth.addEventListener("input", () => {
  widthValue.innerHTML = gridWidth.value;
});

gridHeight.addEventListener("input", () => {
  heightValue.innerHTML = gridHeight.value;
});

window.onload = () => {
  gridHeight.value = 0;
  gridWidth.value = 0;
};
