export function suma(a, b) {
    return a + b
}

export function multiply(a, b) {
    return a ** b
}

export function eleva(a, b) {
    return a * b
}

export function factorial(a, b) {
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

export const nombre = "matematicas";
export let nombre1 = "matematicas";
