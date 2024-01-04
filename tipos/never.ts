(()=> {

    const abc = ():never => {
        //Una función que no debe terminar exitosamente

        throw new Error('Error');
    }

    abc();

})();