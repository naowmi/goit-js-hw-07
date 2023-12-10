const categories = document.querySelectorAll("#categories .item")
console.log(`Number of categories: ${categories.length}`)
categories.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("li");
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements.length}`);
});




const titleList = document.querySelectorAll('h2');
titleList.forEach(function (markupTitleList) {
    markupTitleList.style.color = "#2E2F42";
    markupTitleList.style.fontFamily = "Montserrat";
    markupTitleList.style.fontSize = "24px";
    markupTitleList.style.fontWeight = "600";
    markupTitleList.style.lineHeight = "1.33";
    markupTitleList.style.letterSpacing = "0.03em";
    markupTitleList.style.margin = "16px 0 16px 0"
})
const listElement = document.querySelectorAll("ul");
listElement.forEach(function (listStyleElement) {
    listStyleElement.style.listStyle = "none";
    listStyleElement.style.border = "none";
    listStyleElement.style.padding = "0"
    listStyleElement.style.width = "360px";
})
const nameList = document.querySelectorAll("li");
nameList.forEach(function (markupNameList) {
    markupNameList.style.color = "#2E2F42";
    markupNameList.style.fontFamily = "Montserrat";
    markupNameList.style.fontSize = "16px";
    markupNameList.style.fontWeight = "400";
    markupNameList.style.lineHeight = "1.5";
    markupNameList.style.letterSpacing = "0.03em";
    markupNameList.style.border = "1px solid #808080";
    markupNameList.style.borderRadius = "4px";
    markupNameList.style.width = "360px";
    markupNameList.style.padding = "8px 0  8px 16px"
    markupNameList.style.marginBottom = "8px"
    markupNameList.style.height = "40px";

})
const mainList = document.querySelectorAll(".item");
mainList.forEach(function (markupMainList) {
    markupMainList.style.border = "none";
    markupMainList.style.marginBottom = "40px"
    markupMainList.style.padding = "0"
    markupMainList.style.borderRadius = "8px"
    markupMainList.style.height = "232px";
    markupMainList.style.backgroundColor = "#F6F6FE;"

})
const category = document.querySelector("#categories")
category.style.height = "840px"


