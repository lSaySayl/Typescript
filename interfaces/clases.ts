(()=>{

    interface Xmen{
        name:string;
        realName:string;
        mutanPower(id:string): String;
    }

    interface Human {
        age:number;
    }

    class Mutant implements Xmen, Human {
        public age!: number;
        public name!: string;
        public realName!: string;

        mutanPower(id:string): String {
            return this.name + "-" + this.realName + " - " + this.age + " - " + id;
        }
    }

    const prueba = new Mutant();
    console.log(prueba.mutanPower("20"))

})();