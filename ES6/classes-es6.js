(() => {
  class Avenger {
    name;
    power;

    constructor(name = "No name", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    flying;

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const antman = new Avenger("Antman", 9000);
  console.log(antman);

  const falcon = new FlyingAvenger("Falcon", 500);
  console.log(falcon);
})();
