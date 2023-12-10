const form = document.querySelector('.login-form');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
let userInfo
if (!email || !password) {
    alert('All form fields must be filled in');
} else {
    const formData = {
        email: email,
        password: password
    };
    console.log(formData);

    form.reset()
}
});
const button = document.querySelector("button")
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

const labels = document.querySelectorAll("label")
labels.forEach(label => {
label.style.display = "flex";
label.style.flexDirection = "column"
label.style.alignItems = "flex-start";
label.style.gap = "8px";

})
const inputs = document.querySelectorAll("input")
inputs.forEach(input => {
    input.style.width = "360px";
    input.style.height = "40px";
    input.style.borderRadius = "4px"
    input.style.border = "1px solid #808080"
    input.style.marginBottom = "8px"
})
