(() => {

    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'Sin nombre'}`
    }

    const name = fullName('Camilo');

    console.log(name)



})();