function getNombre(){
  return "Fernando";
}

let nombre:string = "Juan"
let apellido:string = "perez"
let edad:number = 32;

let texto = `Hola, ${ nombre } ${ apellido } (${ edad })`


console.log(texto);


let texto2:string = ` ${ getNombre() }`

console.log(texto2);
