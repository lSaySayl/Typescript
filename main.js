"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    poder: "psiquico",
    miembros: ["Magneto", "Tormenta", "Londo"]
};
let mystique;
mystique = charles;
console.log(mystique);
mystique = apocalipsis;
console.log(mystique);
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Crlark Kent",
        age: 64,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Crlark Kent",
        age: 64,
        powers: [1, 2],
        getName() {
            return this.name;
        },
    };
    console.log(superman);
})();
(() => {
    let myCustomVariable = "Camilo";
    console.log(myCustomVariable);
    myCustomVariable = 10;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: "Camilo",
        age: 24,
        powers: ["Correr", "Saltar"],
    };
    console.log(typeof (myCustomVariable));
})();
//# sourceMappingURL=main.js.map