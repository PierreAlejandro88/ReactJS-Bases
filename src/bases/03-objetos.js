const persona1 = {
    nombre: "Pierre",
    apellido: "Quitiaquez",
    sexo: "M",
    direccion: {
        lat: 12.54,
        long: 12.54
    }
};

console.log(persona1);

const persona2 = {...persona1 };
persona2.apellido = "Prueba";

console.log(persona2);