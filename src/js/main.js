// #CONDICIONALES SIMPLES


// condicional if
const nombre = "Juan"

if (nombre == "Juan") {
    console.log("Hola" + nombre);
}

const edad = 18

if (edad >= 18) {
    console.log("eres mayor de edad y puedes votar")
}

// condicional if else

console.groupCollapsed("condicional if else")

const EdadMinimaParaBeber = 18
const miEdad = 12

if (miEdad < EdadMinimaParaBeber && miEdad > 0) {
    console.log("estàs cometiendo una infracciòn")
} else {
    console.log("puedes beber pero cuidate del ejercito")
}

let userName = "admin"
let password = "1234"

if (userName == "admin" && password == "1234") {
    console.log("acceso permitido")
} else {
    console.log("acceso denegado")
}

// # condicion if else-if

let numero = Math.round(Math.random() * (5 - (-5) + (-5)))

if (numero === 0) {
    console.log("es un número neutro")
} else if (numero < 0) {
    console.log("el numero", numero, "es un numero negativo")
} else {
    console.log("el numero", numero, "es un numero positivo")
}


console.groupEnd()

// #ejercicio de medio de transporte if else-if

let medioDeTransporte = prompt("¿como viajas a Riwi?")


if (medioDeTransporte == "pie") {
    console.log("tu viaja a pie")
} else if (medioDeTransporte == "bicicleta") {
    console.log("tu viaja en bicicleta")
} else if (medioDeTransporte == "metro") {
    console.log("tu viaja en metro")
} else if (medioDeTransporte == "bus") {
    console.log("tu viaja en bus")
} else {
    console.log("tu viajas en un medio de transporte diferente")
}

// #con la propiedad switch podemos realizar las mismas funciones que if  else-if, pero no siempre.
switch (medioDeTransporte) {
    case "pie":
        console.log("tu viaja a pie")
        break;
    case "bicicleta":
        console.log("tu viaja en bicicleta")
        break;
    default:
        console.log("tu viajas en un medio de transporte diferente")
        break;
}

// # realizar menú con 5 alternativas, la quinta es por defecto, con switch y con condicionales.


//CON CONDICIONAL if else-if
let FrecuenciaDeporte = prompt("¿cada cuanto haces deporte en la semana?")

if (FrecuenciaDeporte == "1 vez") {
    console.log("realizas ejercicio una vez por semana")
} else if (FrecuenciaDeporte == "2 veces") {
    console.log("realizas ejercicio dos veces por semana")
} else if (FrecuenciaDeporte == "3 veces") {
    console.log("realizas ejercicio tres veces por semana")
} else if (FrecuenciaDeporte == "4 veces") {
    console.log("realizas ejercicio 4 veces por semana")
} else {
    console.log("tu no realizas ejercicio, eres un sedentario")
}

//CON SWITCH

switch (FrecuenciaDeporte) {
    case "1 vez":
        console.log("realizas ejercicio una vez por semana")
        break;
    case "2 veces":
        console.log("realizas ejercicio dos veces por semana")
        break;
    case "3 veces":
        console.log("realizas ejercicio tres veces por semana")
        break;
    case "4 veces":
        console.log("realizas ejercicio 4 veces por semana")
        break;
    default:
        console.log("tu no realizas ejercicio, eres un sedentario")
        break;
}

// EJERCICIO RESTAURANTE CON MENÚ. Hacerlo con condicional y con switch

let menu = prompt(`
MENU

[1] Carne-> $800
[2] Pollo-> $600
[3] Pizza-> $500
[4] Pescado-> $400`
)

if (menu == 1 && saldo >= 800) {
    console.log("puedes comer carne")
} else if (menu == 2 && saldo >= 600) {
    console.log("puedes comer pollo")
} else if (menu == 3 && saldo >= 500) {
    console.log("puedes comer pizza")
} else if (menu == 4 && saldo >= 400) {
    console.log("puedes comer pescado")
} else {
    console.log("no tienes suficiente saldo")
}

switch (menu) {

}


// CICLO FOR

console.groupCollapsed("ciclo for")

// imprimir nùmeros del cero al 10

for (let i = 0; i <= 10; i++) {
    console.log("hola mundo")
}

// imprimir los nùmero desde el 20 hasta el 5000

for (let i = 20; i <= 5000; i++) {
    console.log("hola mundo")
}

// imprimir la tabla de multiplicar del 2.

for (let i = 0; i <= 10; i++) {
    console.log("2*", i, "=", 2 * i)
}

console.groupEnd

// CICLO WHILE

console.groupCollapsed("ciclo while")

let i = 1
while (i <= 10) {
    console.log("2*", i, "=", 2 * i)
    i++
}

console.groupEnd