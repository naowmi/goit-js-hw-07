const input = document.querySelector("#name-input");
input.style.color = "#2E2F42";
input.style.border = "1px solid #808080"
input.style.borderRadius = "4px"
input.style.width = "360px"
input.style.height = "40px"
input.style.fontSize = "16px"
input.style.fontWeight = "400"
input.style.lineHeight = "1.5"
input.style.letterSpacing = "0.03em"
input.style.paddingLeft = "16px"
const username = document.querySelector("#name-output");
input.addEventListener("input", () => {
const name = input.value.trim();
 username.textContent = name ? name : "Anonymous";  
});


