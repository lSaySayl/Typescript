"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 200,
    };
    const { poder, vision } = avengers;
    console.log(vision.toUpperCase());
    console.log(typeof (poder.toString()));
    const printAvenger = (avengers) => {
        console.log(avengers.nick);
    };
    printAvenger(avengers);
    const printAvengerDos = (_a) => {
        var { ironman } = _a, rest = __rest(_a, ["ironman"]);
        console.log(avengers.nick);
        console.log(rest);
    };
    printAvengerDos(avengers);
    /* Destructuración de arreglos */
    const avengersArray = ["Capitán América", "Ironman", "Thor"];
    const [capi, ironman,] = avengersArray;
    console.log({ ironman, capi });
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armor",
    };
    const batman = {
        name: "batman",
        weapon: "Batmobile",
    };
    const thor = {
        name: "thor",
        weapon: "Mjolnir",
    };
    const avengers = [ironman, batman, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon, "200");
    }
})();
(() => {
    const name = "Camilo";
    const getName = () => {
        console.log(name);
    };
    getName();
})();
//# sourceMappingURL=main.js.map