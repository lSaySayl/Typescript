
/* Type para automovil */
type Automovil = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
};

const batimovil: Automovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};

const bumblebee: Automovil = {
    carroceria: "Amarillo con negro",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};

/* Type para Villano */
type Villano = { nombre: string; edad: number; mutante: boolean };

const villanos: Villano[] = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
];

/* Type para Charles*/

type Charles = {
    poder: string,
    estatura: number
}

const charles: Charles = {
    poder: "psiquico",
    estatura: 1.78
}

/* Type para apocalipsis */
type Apocalipsis = {
    poder: string,
    miembros: string[]
}

const apocalipsis: Apocalipsis = {
    poder: "psiquico",
    miembros: ["Magneto", "Tormenta", "Londo"]
}

let mystique: (Charles | Apocalipsis);

mystique = charles;
console.log(mystique);

mystique = apocalipsis;
console.log(mystique)