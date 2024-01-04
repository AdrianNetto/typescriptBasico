// Revisão Generics

function showData<T>(arg: T): string {
  return `O dado é ${arg}`;
}

console.log(showData(6));
console.log(showData("sim"));
console.log(showData(true));

// Connstraint em Generics

function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é ${obj.name}`;
}

const myObj = {
  name: "Porta",
  cor: "Branca",
};

console.log(showProductName(myObj));

// Generic com Interfaces

interface MyObject<T, U, V> {
  name: string;
  wheels: T;
  engine: U;
  color: V;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = {
  name: "Civic",
  wheels: 4,
  engine: 1.7,
  color: "Prata",
};

const myPen: Pen = {
  name: "Caneta BIC",
  wheels: false,
  engine: false,
  color: "Azul",
};

console.log(myCar);
console.log(myPen);

// Type Parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${[key]} está presente no objeto e tem o valor de ${
    obj[key]
  }`;
}

const server = {
  hd: "2tb",
  ram: "64gb",
};

console.log(getSomeKey(server, "ram"));
console.log(getSomeKey(server, "hd"));

// Keyof type operator

type Character = {
  name: string;
  age: number;
  hasDriveLicense: boolean;
};

type C = keyof Character;

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`;
}

const myChar: Character = {
  name: "Adrian",
  age: 18,
  hasDriveLicense: false,
};

console.log(showCharName(myChar, "name"));

// Typeof type operator

const userName: string = "Adrian";

const userName2: typeof userName = "João";

type x = typeof userName;

const userName3: x = "Tiago";

// indexed access types

type Truck = {
  km: number;
  kg: number;
  description: string;
};

type Km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 10000,
  description: "Volvo FH12 500cv na prancha com piso de madeira",
};

function showKm(km: Km) {
  console.log(`O veículo tem a kilometragem de: ${km}`);
}

showKm(newTruck.km);

const newCar = {
  km: 5000,
  kg: 1000,
};

showKm(newCar.km);

// conditional types

interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 5;
// const someVar2: myType = "teste"

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

