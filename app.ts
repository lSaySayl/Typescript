(() => {

    const sumar =  (a:number,b:number):number => a + b
    console.log(sumar(1,2))


    const contar = (heroes:string[]) => heroes.length;
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    console.log(contar(superHeroes))

    const llamarBatma = (llamar:boolean = true) => llamar? console.log("Batiseñal activada"):console.log("Batiseñal desactivada");
    llamarBatma()

    const unirHeroes = (...personas:string[]):string => personas.join(", ");
    const superman = "Clark";
    const ironman = "Tony";
    console.log(unirHeroes(superman, ironman));

    const noHaceNada = (numero:number, texto:string, booleano:boolean, arreglo:any[]) => {}

    let noHaceNadaTampoco: (n:number,t:string,b:boolean,a:any[])=>void;
    noHaceNadaTampoco = noHaceNada;
   

})()