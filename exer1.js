let nombre = "Lucas"


let apellido = "Romo"

let edad = "19"

let ciudad = "carlos paz"

let soltero = true

console.log(nombre)

console.log(apellido)

console.log(edad)

console.log(ciudad)

let mascotas = "gato"

function suit (mascotas){
    switch (mascotas) {
    case "":
            console.log("No tengo mascotas")
            break;
    case "perro":
            console.log("Tengo perro")
            break;
    case "gato":
            console.log("Tengo gato")
            break;
}
}

suit()

if (soltero == true) {
    console.log("Esta soltero")
}else{console.log("No esta soltero")}