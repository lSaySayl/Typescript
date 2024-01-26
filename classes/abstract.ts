(()=> {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string,
        ) {}    
    }

    class Xmen extends Mutante {
        salvarMund() {
            return "Mundo salvado"
        }
    }
    class Villain extends Mutante {
        conquistarMundo(){
            return "Mundo conquistado"
        }
    }
    
    const wolverine = new Xmen('Wolverine', 'Logan');
    const villain = new Villain('Malo', 'Malito');
    /* console.log(wolverine.salvarMund());
    console.log(villain.conquistarMundo()); */

    const printName = (character:Mutante) => {
       /*  console.log(character.realName) */

    }

    printName(wolverine)
    printName(villain)


})();