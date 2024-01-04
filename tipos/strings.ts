(() => {

    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Volcan Negro`;

    console.log( batman.toUpperCase());
    console.log(`soy ${linternaVerde.charAt(1)}`)

    console.log (batman[10]?.toUpperCase() || 'No está presente')

})();