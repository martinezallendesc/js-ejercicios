console.log("Estoy funcionando")



function calcular() {
//Seleccionar el input y su valor
const campo1 = document.getElementById("n1");
const d1 = (campo1.value);

const campo2 = document.getElementById("n2");
const d2 = (campo2.value);

const campo3 = document.getElementById("n3");
const d3 = (campo3.value);



//Declaro los números de la contraseña

const contrasena = d1+d2+d3;
const mensaje = document.getElementById("msje")


//Ejecuto la funcion condicional
if (contrasena === 911) {
    mensaje.itextContent = `password 1 es correcto`;
} else {
    mensaje.textContent = `password incorrecto`;
}

if (contrasena === 714) {
    mensaje.textContent = `password 2 es correcto`;
} else {
    mensaje.textContent = `password incorrecto`;
}

}

/*
También se me ocurre que podría ser así, pero no se me ocurre cómo podría decir que debe ser true (9) true (9) true (9)

if (d1 == 9) {
d1= true;    
} else {
    d1 = false
} 

*/


