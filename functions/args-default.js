"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName.toUpperCase()} ${lastName === null || lastName === void 0 ? void 0 : lastName.toUpperCase()}`;
        }
        else {
            return `${firstName} ${lastName}`;
        }
    };
    const name = fullName('Camilo', 'Garcia', true);
    console.log(name);
})();
