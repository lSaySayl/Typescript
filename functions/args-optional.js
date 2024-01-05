"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'Sin nombre'}`;
    };
    const name = fullName('Camilo');
    console.log(name);
})();
