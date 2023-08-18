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

function addToCalculationEntry(areaType, value) {
    const calculationEntry = document.getElementById('text-field');
    const count = calculationEntry.childElementCount;
    const entryValue = document.createElement('p');
    entryValue.classList.add('my-4')
    entryValue.innerHTML = `${count + 1}. ${areaType} ${value} cm<sup>2</sup> <button class ="btn btn-success">Convert to m<sup>2</sup> </button> `;
    calculationEntry.appendChild(entryValue);

}

// Triangle section
document.getElementById('btn-triangle').addEventListener('click', function () {
    const base = getInputValueById('input-width');
    const height = getInputValueById('input-height');
    if (isNaN(base) || isNaN(height)) {
        alert('Only Accept Numbers')
        return
    }
    const area = (0.5 * base * height).toFixed(2);
    setTextFieldById('triangle-area', area)
    addToCalculationEntry('Triangle', area)
})
// Rectangle section
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const base = getInputValueById('input-rec-width');
    const length = getInputValueById('input-rec-length');
    if (isNaN(base) || isNaN(length)) {
        alert('Only Accept Numbers')
        return
    }
    const area = (base * length).toFixed(2);
    setTextFieldById('rectangle-area', area)
    addToCalculationEntry('Rectangle', area)

})
// Parallelogram Section
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const base = getInputValueById('input-par-width');
    const height = getInputValueById('input-par-height');
    if (isNaN(base) || isNaN(height)) {
        alert('Only Accept Numbers')
        return
    }
    const area = (base * height).toFixed(2);
    setTextFieldById('parallelogram-area', area)
    addToCalculationEntry('Parallelogram', area)

})
// Rhombus section
document.getElementById('btn-rhombus').addEventListener('click', function () {
    const diagonal1 = getInputValueById('input-rho-value1');
    const diagonal2 = getInputValueById('input-rho-value2');
    if (isNaN(diagonal1) || isNaN(diagonal2)) {
        alert('Only Accept Numbers')
        return
    }
    const area = (0.5 * diagonal1 * diagonal2).toFixed(2);
    setTextFieldById('rhombus-area', area)
    addToCalculationEntry('Rhombus', area)
})
// Pentagon section
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const perimeter = getInputValueById('input-p');
    const apothem = getInputValueById('input-b');
    if (isNaN(perimeter) || isNaN(apothem)) {
        alert('Only Accept Numbers')
        return
    }
    const area = (0.5 * perimeter * apothem).toFixed(2);
    setTextFieldById('pentagon-area', area)
    addToCalculationEntry('Pentagon', area)
})
//Ellipse section
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const axisA = getInputValueById('input-ellipse-1');
    const axisB = getInputValueById('input-ellipse-2');
    if (isNaN(axisA) || isNaN(axisB)) {
        alert('Only Accept Numbers')
        return
    }
    const area = (3.1416 * axisA * axisB).toFixed(2);
    setTextFieldById('ellipse-area', area);
    addToCalculationEntry('Ellipse', area)
})
