const saludar = function(nombre) {

    return nombre;
};


const saludar2 = (nombre) => {
    return `Hola ${ nombre }`;
}


const saludar3 = (nombre) => `Hola ${ nombre }`;



console.log(saludar3(4));


//Tarea 
//1.funcion de flecha
//2. retornar un objeto implicito
//3. Pruebas
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');

console.log(usuarioActivo);