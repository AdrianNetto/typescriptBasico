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
