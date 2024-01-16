"use strict";
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
