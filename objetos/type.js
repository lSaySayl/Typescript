"use strict";
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
