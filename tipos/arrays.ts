const numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

const villians: string[] = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
villians.forEach((v) => console.log(v.toUpperCase()));
villians.map((v) => console.log(v.toUpperCase() + '!!!'));
