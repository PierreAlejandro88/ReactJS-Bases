// Desestructuracion 

// Asignacion Desestructurante


const persona = {
    nombre: "Prueba",
    clave: "pierre",
    edad: 28,
    rango: 'soldier',
    direccion: {
        lat: 5151,
        long: 1561
    }

};


const { edad } = persona;

// console.log(edad);


const imprimePersona = ({ nombre, rango = 'Cap' }) => {

    return {
        nombreClave: nombre,
        anios: edad,
        direccion: {
            lat: 5151,
            long: 1561
        }
    };
};


const { nombreClave, anios, direccion: { lat, long } } = imprimePersona(persona);

console.log(nombreClave, anios);
console.log(lat, long);