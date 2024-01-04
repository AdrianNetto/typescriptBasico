// tipo de objeto para função com interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$${product.price}`
  );
  if (product.isAvailable) {
    console.log("O produto está disponível");
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 59.99,
  isAvailable: true,
};

showProductDetails(shirt);

const pant: Product = {
  name: "Calça",
  price: 29.99,
  isAvailable: false,
};

// interface com parametro opcional

interface User {
  nome: string;
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  if (user.role) {
    console.log(
      `O user ${user.nome} tem um email de ${user.email} e um cargo de ${user.role}`
    );
  }
  console.log(`O user ${user.nome} tem um email de ${user.email}`);
}

const usuario: User = {
  nome: "Adrian",
  email: "user.test@gmail.com",
};

const usuarioRole: User = {
  nome: "João",
  email: "user.test@gmail.com",
  role: "adm",
};

showUserDetails(usuario);
showUserDetails(usuarioRole);

//readonly

interface Car {
  brand: string;
  readonly wheels: number;
}

const chevette: Car = {
  brand: "Chevrolet",
  wheels: 4,
};

console.log(chevette);

// index signature

interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

console.log(coords);

coords.y = 15;

console.log(coords);

// herança de intefaces

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const adrian: Human = {
  name: "Adrian",
  age: 18,
};

console.log(adrian);

const giyu: SuperHuman = {
  name: "giyu",
  age: 21,
  superpowers: ["Water Breath", "Super Speed"],
};

console.log(giyu);
console.log(giyu.superpowers[0]);

// intersection types

interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);
console.log(arnold.type, arnold.caliber);

// readonly array

let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana "];

// myArray[3] = "Mamão";

console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);

// tuplas

type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];

console.log(myNumberArray);
console.log(myNumberArray[3]);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["Adrian", 18];

console.log(anotherUser);
console.log(anotherUser[0]);
console.log(anotherUser[1]);

anotherUser[0] = "João";

console.log(anotherUser);

// tuplas com readonly

function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2])