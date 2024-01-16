(() => {

    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 200,
    };

    const { poder, vision } = avengers

    console.log(vision.toUpperCase());
    console.log(typeof (poder.toString()))

    const printAvenger = (avengers: Avengers): void => {
        console.log(avengers.nick)
    }

    printAvenger(avengers);

    const printAvengerDos = ({ ironman, ...rest }: Avengers): void => {
        console.log(avengers.nick)
        console.log(rest)
    }

    printAvengerDos(avengers);

    /* Destructuración de arreglos */

    const avengersArray: string[] = ["Capitán América", "Ironman", "Thor"];
    
    const [capi,ironman,] = avengersArray;

    console.log({ironman,capi});



})();
