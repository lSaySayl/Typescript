(()=>{

    interface BatiMovil {
        encender:boolean;
        velocidadMaxima:number;
        acelerar():void;
    }

    const conducirBatimovil = ( auto:BatiMovil):void => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    }

    const batimovil:BatiMovil = {
        encender:false,
        velocidadMaxima:0,
        acelerar(){
            console.log('...... runnnnn')
        }
    }

    interface Guason {
        reir?:boolean;
        comer?:boolean;
        llorar?:boolean;
    }

    const guason:Guason = {
        reir:true,
        comer:true,
        llorar:false
    }

    const reir = ( guason:Guason):void => {
        if(guason.reir){
            console.log("Jajajaj")
        }
    }

    reir(guason)

    interface CiudadGotica {
        (ciudadanos:string[]):number;
    }

    const ciudadGotica:CiudadGotica = (ciudadanos:string[]):number => {
        return ciudadanos.length
    }

    console.log(ciudadGotica(['Flash','Batman','Superman','Acuaman']))

    interface PersonaInterface {
        nombre:string;
        edad:number;
        sexo:string;
        estadoCivil:string;
        imprimirBio():void;
    }

    class Persona implements PersonaInterface{
        public nombre!: string;
        public edad!: number;
        public sexo!: string;
        public estadoCivil!: string;

        imprimirBio(): void {
            console.log(this.nombre + " " + this.edad + " " + this.sexo + " " + this.estadoCivil)
        }
    }

    const persona = new Persona();
    persona.edad = 20;
    console.log(persona.edad)



})();