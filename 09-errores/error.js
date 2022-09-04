const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val;
    }
    throw new Error("El valor debe ser de tipo numero");
}

// const elDoble = miFuncion("ala")
const numero = "9";

try {
    // Codigo que puede fallar
    console.log("Esta ejecutandose de manera correcta")
    const doble = miFuncion(numero);
    console.log(doble);
} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`);
    console.error("ERROR!");
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algun error, como si no existe ninguno");
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error