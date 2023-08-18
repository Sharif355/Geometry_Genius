// Triangle section
document.getElementById('btn-triangle').addEventListener('click', function () {
    const inputValueWidth = document.getElementById('input-width');
    const inputWidth = inputValueWidth.value;
    const inputValueHeight = document.getElementById('input-height');
    const inputHeight = inputValueHeight.value;
    const textField = document.getElementById('triangle-area')
    textField.innerText = 0.5 * inputWidth * inputHeight;
    inputValueWidth.value = '';
    inputValueHeight.value = '';

})
// Rectangle section
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const inputValueWidth = document.getElementById('input-rec-width');
    const inputWidth = inputValueWidth.value;
    const inputValueHeight = document.getElementById('input-rec-length');
    const inputHeight = inputValueHeight.value;
    const textField = document.getElementById('rectangle-area')
    textField.innerText = inputWidth * inputHeight;
    inputValueWidth.value = '';
    inputValueHeight.value = '';

})
// Parallelogram Section
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const inputValueWidth = document.getElementById('input-par-width');
    const inputWidth = inputValueWidth.value;
    const inputValueHeight = document.getElementById('input-par-height');
    const inputHeight = inputValueHeight.value;
    const textField = document.getElementById('parallelogram-area')
    textField.innerText = inputWidth * inputHeight;
    inputValueWidth.value = '';
    inputValueHeight.value = '';

})
// Rhombus section
document.getElementById('btn-rhombus').addEventListener('click', function () {
    const inputValueWidth = document.getElementById('input-rho-value1');
    const inputWidth = inputValueWidth.value;
    const inputValueHeight = document.getElementById('input-rho-value2');
    const inputHeight = inputValueHeight.value;
    const textField = document.getElementById('rhombus-area')
    textField.innerText = 0.5 * inputWidth * inputHeight;
    inputValueWidth.value = '';
    inputValueHeight.value = '';

})
// Pentagon section
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const inputValueWidth = document.getElementById('input-p-value');
    const inputWidth = inputValueWidth.value;
    const inputValueHeight = document.getElementById('input-b-value');
    const inputHeight = inputValueHeight.value;
    const textField = document.getElementById('pentagon-area')
    textField.innerText = 0.5 * inputWidth * inputHeight;
    inputValueWidth.value = '';
    inputValueHeight.value = '';

})
//Ellipse section
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const inputValueWidth = document.getElementById('input-ellipse-1');
    const inputWidth = inputValueWidth.value;
    const inputValueHeight = document.getElementById('input-ellipse-2');
    const inputHeight = inputValueHeight.value
    const textField = document.getElementById('ellipse-area')
    textField.innerText = 3.1416 * inputWidth * inputHeight;
    inputValueWidth.value = '';
    inputValueHeight.value = '';
})


function getInputValueById(inputId) {
    const valueById = document.getElementById('inputId')
}