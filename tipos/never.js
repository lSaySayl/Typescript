"use strict";
(() => {
    const abc = () => {
        //Una función que no debe terminar exitosamente
        throw new Error('Error');
    };
    abc();
})();
