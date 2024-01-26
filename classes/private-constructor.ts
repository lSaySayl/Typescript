(()=> {
    class Apocalipsis {
        static instance: Apocalipsis;
        private constructor(public name: string) {

        }

        static callApocalipsis():Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis')
            }

            return Apocalipsis.instance;

        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();

})();