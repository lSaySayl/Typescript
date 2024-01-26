(()=> {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
         /*    console.log('Constructor Avenger') */
        }

        protected getFullName () {
            return `${this.name} ${this.realName}!!`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean,
        ){
            super(name,realName)
            /* console.log('Constructor Xmen') */
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName (name: string) {
            if(name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres')
            }
            this.name = name;
        }

        getNameDesdeXmen() {
            /* console.log(super.getFullName()) */
        }


    }

    const wolfverine = new Xmen("Wolf","camiloaaa",true);
    /* console.log(wolfverine.getNameDesdeXmen()) */
    wolfverine.fullName = "Camilo"
 /*    console.log(wolfverine.fullName)
    console.log("--------------------------------") */

    class Animal {
        private  name: string = "animal"

        get nombre() {
            if(this.name === 'animal') {
                console.log('no tiene nombre')
            }
            return this.name;
        }

        set nombre(name: string) {
            this.name = name;
        }
    }

    const animalito = new Animal();
    /* animalito.nombre = "leon" */
    /* console.log(animalito.nombre) */
    

})();