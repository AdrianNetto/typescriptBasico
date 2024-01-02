function soma(a: number, b: number) {
  console.log(a + b);
}

soma(4, 5);

// retornos

function greeting(name: string): string {
  return `Olá, ${name}`;
}

console.log(greeting("Adrian"));
console.log(greeting("Adrian"));

// funções anonimas

setTimeout(function () {
  const sallary: number = 1000;

  // console.log(parseFloat(sallary))

  // console.log(sallary)
}, 2000);

// tipos de objetos

function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("Y coordinates: " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

passCoordinates(objCoord);

// propriedades opcionais

function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  if (c) {
    console.log("C: " + c);
  }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);

// validação de paramentro adicional

function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}. Tudo bem?`;
  }
  return `Olá, ${firstName}. Tudo bem?`;
}

console.log(advancedGreeting("Adrian", "Netto"));
console.log(advancedGreeting("João"));

// union types

function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100);
showBalance("500");

// avançando em union types

function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado";
  }

  return `A função do usuário é ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// type alias

type ID = string | number;

function showID(id: ID) {
  console.log(`O ID é: ${id}`);
}

showID(1);
showID("200");

// interfaces

interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
  x: 10,
  y: 20,
  z: 30
}

showCoords(coordObj)

// interfaces x type alias

interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = {name: "Adrian", age:18}

console.log(somePerson)

type PersonType = {
  name: string  
}

// type PersonType = {
//   age: number
// }

// literal types

let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é: ${direction}`)
}

showDirection("right")

// non null assertion operator

const p = document.getElementById("some-p")

console.log(p!.innerText)

// bigInt

let n: bigint

n = 1000n

console.log(n)
console.log(typeof n)

// symbol

let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA ===  symbolB)
