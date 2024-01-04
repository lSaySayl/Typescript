"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isSuperman, isBatman });
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
