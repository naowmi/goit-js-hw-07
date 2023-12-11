const input = document.querySelector("#name-input");
const username = document.querySelector("#name-output");
input.addEventListener("input", () => {
const name = input.value.trim();
 username.textContent = name ? name : "Anonymous";  
});


