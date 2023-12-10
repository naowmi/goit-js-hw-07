function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const markupDiv = document.querySelector("#controls")
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");


  function createBoxes(amount) {
    let size = 20;
    const massiveBoxes = [];
    for (let i = 0; i < amount; i++) {
      const createBox = document.createElement("div");
      size += 10;
      createBox.style.width = `${size}px`
      createBox.style.height = `${size}px`
      createBox.style.backgroundColor = getRandomHexColor();
      massiveBoxes.push(createBox);
    }
    boxes.append(...massiveBoxes)
    
    
  }
function destroyBoxes() {
  boxes.innerHTML = ""
}
createButton.addEventListener("click", () => {
  destroyBoxes();
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''
  } else {
    alert("Невірна кількість кубиків, треба від 1 - 100  :0");
    input.value = ''
   }
})

destroyButton.addEventListener("click", () => {
  destroyBoxes();
})

//? markupDiv
markupDiv.style.display = "flex";
markupDiv.style.padding = "32px";
markupDiv.style.alignItems = "flex-start";
markupDiv.style.gap = "16px";







//? Input
input.style.borderRadius = "8px";
input.style.border = "1px solid #808080";
input.style.display = "flex";
input.style.padding = "8px 72px";
input.style.flexDirection = "column";
input.style.justifyContent = "center";
input.style.alignItems = "center";
input.style.gap = "10px";
input.style.width = "200px"
input.style.height = "40px"


//? createButton

createButton.style.display = "flex";
createButton.style.width = "120px";
createButton.style.padding = "8px 16px";
createButton.style.justifyContent = "center";
createButton.style.alignItems = "center";
createButton.style.gap = "10px";
createButton.style.borderRadius = "8px";
createButton.style.backgroundColor = "#4E75FF";
createButton.style.border = "none";
//* text button
createButton.style.color = "#FFFFFF";
createButton.style.fontSize = "16px";
createButton.style.fontWeight = "500";
createButton.style.lineHeight = "1.5";
createButton.style.letterSpacing = "0.03em";


//? destroyButton

destroyButton.style.display = "flex";
destroyButton.style.width = "120px";
destroyButton.style.padding = "8px 16px";
destroyButton.style.justifyContent = "center";
destroyButton.style.alignItems = "center";
destroyButton.style.gap = "10px";
destroyButton.style.borderRadius = "8px";
destroyButton.style.backgroundColor = "#FF4E4E";
destroyButton.style.border = "none";
//* text button
destroyButton.style.color = "#FFFFFF";
destroyButton.style.fontSize = "16px";
destroyButton.style.fontWeight = "500";
destroyButton.style.lineHeight = "1.5";
destroyButton.style.letterSpacing = "0.03em";

//? boxes
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.padding = "32px";
boxes.style.alignItems = "flex-start";
boxes.style.gap = "10px";