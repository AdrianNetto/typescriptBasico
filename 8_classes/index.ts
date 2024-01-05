// Campos em classes

class User {
  name!: string;
  age!: number;
}

const adrian = new User();

console.log(adrian);

adrian.name = "Adrian";

console.log(adrian);

// constructor

class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new NewUser("João", 22);

console.log(joao);

// readonly em classes

class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const chevette = new Car("Chevette");

console.log(chevette);
console.log(chevette.wheels);

chevette.name = "Chevette turbo";
console.log(chevette);

// herança e super

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("Valtra");

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const xWing = new KillerMachine("X Wing", 4);

console.log(trator);
console.log(xWing);

// Métodos

class Dwarf {
  name;

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log("Hey, you, Finally awake!");
  }
}

const dort = new Dwarf("Dort");

console.log(dort.name);

dort.greeting();

class Guard {
  name;

  constructor(name: string) {
    this.name = name;
  }

  recognize() {
    console.log("Wait... I know you");
  }
}

const realGuard = new Guard("Guarda Real");

console.log(realGuard.name);
realGuard.recognize();

// this em classes

class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `Caminhão do modelo ${this.model} com ${this.hp} cavalos de potência`
    );
  }
}

const myTruck = new Truck("Scania 113h", 360);

myTruck.showDetails();

// getters

class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullname() {
    return this.name + " " + this.surname;
  }
}

const user = new Person("Adrian", "Netto");

console.log(user);

console.log(user.fullname);

// setter

class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }

    this.x = x;

    console.log("X inserido com sucesso");
  }

  set fillY(y: number) {
    if (y === 0) {
      return;
    }
  
    this.y = y;
  
    console.log("Y inserido com sucesso");
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y} inseridos com sucesso`
  }
}

const myCoords = new Coords();

myCoords.fillX = 15
myCoords.fillY = 50

console.log(myCoords)
console.log(myCoords.getCoords)


