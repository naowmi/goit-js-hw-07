function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color")
button.style.display = "flex";
button.style.padding = "8px 16px";
button.style.justifyContent = "center";
button.style.alignItems = "center";
button.style.gap = "10px";
button.style.border = "none"
button.style.borderRadius = "8px";
button.style.backgroundColor = "#4E75FF";
button.style.color = "#FFFFFF";
button.style.fontSize = "16px";
button.style.fontWeight = "500";
button.style.lineHeight = "1.5";
button.style.letterSpacing = "0.03em";

const text = document.querySelector("p")
button.style.color = "##2E2F42";
button.style.fontSize = "16px";
button.style.fontWeight = "400";
button.style.lineHeight = "1.5";
button.style.letterSpacing = "0.03em";



button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  const spanColor = document.querySelector(".color")
  spanColor.textContent = "-" + " " + randomColor;
})

