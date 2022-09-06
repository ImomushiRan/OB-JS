/* localStorage.setItem("Nombre", "Gorka");
localStorage.setItem("Nombre", "Miguel"); */

/* console.log(localStorage.getItem("Nombre"));

localStorage.setItem("persona", JSON.stringify({nombre: "Gorka", edad: 34}));

console.log(JSON.parse(localStorage.getItem("persona"))); */

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido en un objeto de Javascript

localStorage.removeItem("Nombre");

sessionStorage.setItem("nombre-sesion", "Gorka");

/* Cookies */

document.cookie = "nombreCookie=GorkaCookie";
document.cookie = "nombreCaducidad=Nombre; expires=" + new Date(2023, 0, 1).toUTCString();

console.log(document.cookie);