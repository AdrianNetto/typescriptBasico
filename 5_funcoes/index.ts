// void

function withoutReturn(): void {
  console.log("Esta função não possui retorno!");
}

withoutReturn();

// callback como argumento

function greeting(name: string): string {
  return `Olá, ${name}.`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a função...");

  const greet = f(userName);

  console.log(greet);
}

preGreeting(greeting, "Adrian");

// generic function

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["Q", "W", "e"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergeObjects({ name: "Adrian" }, { idade: 18 });

console.log(newObject);

// constrains em generic functions

function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(5, 7));
console.log(biggestNumber("12", "5"));

//  esepcificar tipo de argumento

function mergeArray<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArray([1, 2, 3], [4, 5]));
console.log(mergeArray<number | string>([1, 2, 3], ["sim", "nao"]));

// argumentos opcionais

function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá, ${greet} ${name}. Tudo bem?`;
  }

  return `Olá, ${name}. Tudo bem?`;
}

console.log(modernGreeting("Adrian"));
console.log(modernGreeting("Adrian", "Sr"));

// parametro default

function somaDefault(n: number, m = 10) {
  return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(10, 50));

//tipo unknown

function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log(`${x} é um numero`);
  }
}

doSomething([1, 2, 3]);
doSomething(4);

// tipo never

function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

// showErrorMessage("algum erro");

// Rest operator com TS

function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(123, 234, 456, 76))

// destructuring como parametro

function showProductDetails({name, price}: {name: string, price: number}): string {
  return `O nome do produto é ${name} e seu respectivo preço é igual a R$${price}`
}

const shirt = {name: "Camisa", price: 59.99}

console.log(showProductDetails(shirt))
