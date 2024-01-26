"use strict";
(() => {
})();
(() => {
    class Mutant {
        mutanPower(id) {
            return this.name + "-" + this.realName + " - " + this.age + " - " + id;
        }
    }
    const prueba = new Mutant();
    console.log(prueba.mutanPower("20"));
})();
(() => {
    const client = {
        name: "Bruce",
        age: 45,
        address: {
            city: "Gotham",
            id: 123,
            zip: "123456"
        },
        getFullAddress(id) {
            return this.address.city + " " + this.address.zip + " " + id;
        }
    };
    console.log(client.getFullAddress("10"));
})();
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log('...... runnnnn');
        }
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("Jajajaj");
        }
    };
    reir(guason);
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    console.log(ciudadGotica(['Flash', 'Batman', 'Superman', 'Acuaman']));
    class Persona {
        imprimirBio() {
            console.log(this.nombre + " " + this.edad + " " + this.sexo + " " + this.estadoCivil);
        }
    }
    const persona = new Persona();
    persona.edad = 20;
    console.log(persona.edad);
})();
(() => {
    let addNumbers;
    addNumbers = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map