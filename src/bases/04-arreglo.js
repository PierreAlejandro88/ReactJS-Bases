//Arreglos
const arreglo = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);

let arreglo2 = [...arreglo, 5];

//arreglo2.push(5);


//map como operador for crea un nuevo arreglo
const arreglo3 = arreglo2.map((numeroIndividual) => {
    return numeroIndividual * 2;
});

arreglo3[2] = 4;

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);