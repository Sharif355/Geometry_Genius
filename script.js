// Triangle section
document.getElementById('btn-triangle').addEventListener('click', function () {
    const base = getInputValueById('input-width');
    const height = getInputValueById('input-height');
    const area = 0.5 * base * height;
    setTextFieldById('triangle-area', area)
})
// Rectangle section
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const base = getInputValueById('input-rec-width');
    const length = getInputValueById('input-rec-length');
    const area = base * length;
    setTextFieldById('rectangle-area', area)
})
// Parallelogram Section
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const base = getInputValueById('input-par-width');
    const height = getInputValueById('input-par-height');
    const area = base * height;
    setTextFieldById('parallelogram-area', area)


})
// Rhombus section
document.getElementById('btn-rhombus').addEventListener('click', function () {
    const diagonal1 = getInputValueById('input-rho-value1');
    const diagonal2 = getInputValueById('input-rho-value2');
    const area = 0.5 * diagonal1 * diagonal2;
    setTextFieldById('rhombus-area', area)
})
// Pentagon section
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const perimeter = getInputValueById('input-p');
    const apothem = getInputValueById('input-b');
    const area = 0.5 * perimeter * apothem;
    setTextFieldById('pentagon-area', area)

})
//Ellipse section
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const axisA = getInputValueById('input-ellipse-1');
    const axisB = getInputValueById('input-ellipse-2');
    const area = 3.1416 * axisA * axisB;
    setTextFieldById('ellipse-area', area);
})

//reusable function => to reduce code repetition
function getInputValueById(inputId) {
    const valueById = document.getElementById(inputId)
    const inputValue = valueById.value;
    const value = parseFloat(inputValue);
    return value;
}

function setTextFieldById(textId, area) {
    const textFieldById = document.getElementById(textId)
    textFieldById.innerText = area;
}