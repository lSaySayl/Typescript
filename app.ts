(() => {
    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
    const existe:boolean = false;

    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];

    //Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];

    //Enumeraciones

    enum Fuerza {
        acuaman = 0,
        batman = 1,
        flash = 5,
        superman = 100
    }

    //Retorno de funciones

    function activar_batiseñal():string {
        return 'activada';
    }

    const pedirAyuda = ():void => {
        console.log('Auxilio!!!');
    }

    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder: number = (<number>poder).toString().length;
    const largoDelPoder2: number = (poder as number).toString().length;

    console.log( largoDelPoder, largoDelPoder2)
   

})()