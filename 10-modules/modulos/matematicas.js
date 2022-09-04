function suma(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function eleva(a, b) {
    return a ** b
}

function factorial(a, b) {
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

//

module.exports = {
    suma, 
    multiply,
    eleva,
    factorial
}