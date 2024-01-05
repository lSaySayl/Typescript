(() => {

    const fullName = (firstName: string, ...restArgs: string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`

    }

    const superman = fullName('Clark', 'Joseph', 'Kent');

    console.log(superman);

    const numbers = (a: number, ...restArgs: number[]): number[] => {
        const multipliedArgs = [a * 20, ...restArgs.map(num => num * 20)];
        return multipliedArgs;
    }

    const result = numbers(1, 2, 2, 4, 5);
    console.log(result);

})();