"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    //Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    //Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    const pedirAyuda = () => {
        console.log('Auxilio!!!');
    };
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.toString().length;
    const largoDelPoder2 = poder.toString().length;
    console.log(largoDelPoder, largoDelPoder2);
})();
