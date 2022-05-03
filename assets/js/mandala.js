window.onload = function () {
    addEventsToColorPicker();
    getSvg();
};


function addEventsToColorPicker() {
    const divColorPicker = document.querySelectorAll(".color-picker > div");
    divColorPicker.forEach(addEventToColorBox)
}

function addEventToColorBox(div) {
    div.addEventListener("click", handleClick)
}

function handleClick(event) {
    addColorToSvg(event.target.dataset.color)
}

function getSvg() {
    fetch("./assets/imagens/mandala.svg")
    .then(response => response.text())
    .then((svg) => {
        addSvgToDiv(svg);
    })
}

function addSvgToDiv(svg) {
    const tagSvg = new DOMParser().parseFromString(svg, "text/xml");
    const div = document.querySelector(".mandala-svg");
    div.appendChild(tagSvg.childNodes[0]);
}

function addColorToSvg(color) {
    const paths = document.querySelectorAll(".mandala-svg svg path");
    paths.forEach(path => {
        path.style.fill = color;
    });
}