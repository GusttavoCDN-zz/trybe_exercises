const screen = document.querySelector(".kindle_screen");
const text = document.querySelectorAll(".screen_text");
const backgroundColor = document.querySelector("[data-background-color]");
const textColor = document.querySelector("[data-text-color]");
const fontSize = document.querySelector("[data-font-size]");
const fontFamily = document.querySelector("[data-font-family]");

function changeBackground(event) {
    screen.style.backgroundColor = backgroundColor.value
    localStorage.setItem("backgroundColor", backgroundColor.value)
}

function changeText(event) {
    text.forEach(text => {
        text.style.color = textColor.value
    })

    localStorage.setItem("textColor", textColor.value)
}

function changeFontSize(event) {
    text.forEach(text => {
        text.style.fontSize = `${fontSize.value}px`
    })
    
    localStorage.setItem("fontSize", fontSize.value)
}

function changeFontFamily(event) {
    switch (fontFamily.value) {
        case "arial":
            text.forEach(text => {
                text.classList.add("arial");
                text.classList.remove("times", "courier", "verdana");
            })
            break;
        case "verdana":
            text.forEach(text => {
                text.classList.add("verdana");
                text.classList.remove("times", "courier", "arial");
            })
            break;
        case "courier":
            text.forEach(text => {
                text.classList.add("courier");
                text.classList.remove("times", "verdana", "arial");
            })
            break;
        case "times":
            text.forEach(text => {
                text.classList.add("times");
                text.classList.remove("courier", "verdana", "arial");
            })
            break;
    }

    localStorage.setItem("fontFamily", fontFamily.value)
}

backgroundColor.addEventListener("change", changeBackground);
textColor.addEventListener("change", changeText);
fontSize.addEventListener("change", changeFontSize);
fontFamily.addEventListener("change", changeFontFamily);

//  ---

window.onload = function () {
    if (localStorage.getItem("backgroundColor")) {
        backgroundColor.value = localStorage.backgroundColor
        changeBackground()
    }

    if (localStorage.getItem("textColor")) {
        textColor.value = localStorage.textColor
        changeText()
    }

    if (localStorage.getItem("fontSize")) {
        fontSize.value = localStorage.fontSize
        changeFontSize()
    }

    if (localStorage.getItem("fontFamily")) {
        fontFamily.value = localStorage.fontFamily
        changeFontFamily()
    }

}