let displayBox = document.querySelector(".display");
let operator = ["+", "-", "*", "/", "%", "."];

function showDisplay(x) {
    let current = displayBox.innerHTML;
    let lastIndex = current[current.length - 1];
    // body...
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x;
    } else if (operator.includes(x) && operator.includes(lastIndex)) {
        return displayBox.innerHTML = `${current.substring(0,current.length-1)}${x}`;
    }
    return displayBox.innerHTML += x;
}

function calculate() {
    // body...
    let current = displayBox.innerHTML;
    try {
        displayBox.innerHTML = eval(current);
    } catch (e) {
        alert("Your input is wrong");
    }
    //displayBox.innerHTML=eval(current);
}

function allClear() {
    // body...
    displayBox.innerHTML = 0;
}

function clearLast() {
    // body...
    let current = displayBox.innerHTML;
    if (current.length == 1) {
        displayBox.innerHTML = 0;
    } else {
        displayBox.innerHTML = current.substring(0, current.length - 1);
    }

}