(() => {
    type Avenger = {
        name: string;
        weapon: string;
    };

    const ironman: Avenger = {
        name: "Ironman",
        weapon: "Armor",
    };

    const batman: Avenger = {
        name: "batman",
        weapon: "Batmobile",
    };

    const thor: Avenger = {
        name: "thor",
        weapon: "Mjolnir",
    };
    const avengers: Avenger[] = [ironman, batman, thor];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon, "200");
    }

    
})();
