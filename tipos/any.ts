let avenger: any = 123;
let exist;
let power;

avenger = 'Dr. Strange';
console.log( (avenger as String).charAt(0));

avenger = 150.5555;
console.log( (<number>avenger).toFixed(2));

console.log(exist);
console.log(power);
console.log("hola")