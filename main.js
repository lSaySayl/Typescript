"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMund() {
            return "Mundo salvado";
        }
    }
    class Villain extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado";
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const villain = new Villain('Malo', 'Malito');
    /* console.log(wolverine.salvarMund());
    console.log(villain.conquistarMundo()); */
    const printName = (character) => {
        /*  console.log(character.realName) */
    };
    printName(wolverine);
    printName(villain);
})();
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
        static getAvgAge() {
            return this.name;
        }
        getName() {
            return this.name;
        }
    }
    Avenger.avgAge = 35;
    /*  const antman: Avenger = new Avenger('Antman', 'Cap', 'Camilo');
     console.log(antman)
     console.log(Avenger.avgAge)
     console.log( Avenger.getAvgAge()) */
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            /*    console.log('Constructor Avenger') */
        }
        getFullName() {
            return `${this.name} ${this.realName}!!`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            /* console.log('Constructor Xmen') */
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }
            this.name = name;
        }
        getNameDesdeXmen() {
            /* console.log(super.getFullName()) */
        }
    }
    const wolfverine = new Xmen("Wolf", "camiloaaa", true);
    /* console.log(wolfverine.getNameDesdeXmen()) */
    wolfverine.fullName = "Camilo";
    /*    console.log(wolfverine.fullName)
       console.log("--------------------------------") */
    class Animal {
        constructor() {
            this.name = "animal";
        }
        get nombre() {
            if (this.name === 'animal') {
                console.log('no tiene nombre');
            }
            return this.name;
        }
        set nombre(name) {
            this.name = name;
        }
    }
    const animalito = new Animal();
    /* animalito.nombre = "leon" */
    /* console.log(animalito.nombre) */
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis');
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
})();
//# sourceMappingURL=main.js.map