(() => {
    class Avenger {
        static avgAge: number = 35;

        constructor(
            private name: string, 
            public team: string, 
            public realName?: string,
            avgAge: number = 55) {
                Avenger.avgAge = avgAge;
        }

        public bio() {
            return `${this.name} (${this.team})`;
        }

        static getAvgAge() {
            return this.name;
        }



        public getName(): string {
            return this.name;
        }
    }

   /*  const antman: Avenger = new Avenger('Antman', 'Cap', 'Camilo');
    console.log(antman)
    console.log(Avenger.avgAge)
    console.log( Avenger.getAvgAge()) */


})();
