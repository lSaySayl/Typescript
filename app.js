"use strict";
(() => {
    const sumar = (a, b) => a + b;
    console.log(sumar(1, 2));
    const contar = (heroes) => heroes.length;
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    console.log(contar(superHeroes));
    const llamarBatma = (llamar = true) => llamar ? console.log("Batiseñal activada") : console.log("Batiseñal desactivada");
    llamarBatma();
    const unirHeroes = (...personas) => personas.join(", ");
    const superman = "Clark";
    const ironman = "Tony";
    console.log(unirHeroes(superman, ironman));
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
