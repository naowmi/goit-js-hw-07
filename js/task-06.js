function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
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