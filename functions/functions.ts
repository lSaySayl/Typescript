(()=> {

    const hero: string = 'Flash';

    function returName ():string {
        return hero;
        
    }

    const activateBatSignal = ():void => {
        return console.log('BatSignal activated');
    }

    activateBatSignal();

})()