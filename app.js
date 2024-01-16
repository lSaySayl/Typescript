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
