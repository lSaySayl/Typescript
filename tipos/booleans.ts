(()=> {
    let isSuperman:boolean = true;
    let isBatman:boolean = false;

    console.log({isSuperman, isBatman});

    isSuperman = (isBatman) ? true : false;
    console.log({isSuperman});

})();