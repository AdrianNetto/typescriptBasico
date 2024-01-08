// importação de arquivos

import importGreet from "./greet.js";

importGreet();

// importando variáveis

import { x } from "./variable.js";

console.log(x);

// multiplas importações

import { a, b, myFunction } from "./multiple.js";

console.log(a);
console.log(b);
myFunction();

// alias para imports

import { someName as name } from "./changename.js";

console.log(name);

// importando tudo

import * as myNumbers from "./numbers";

console.log(myNumbers);

const nX = myNumbers.n1;

console.log(nX);

myNumbers.showNumber();

// importando tipos

import { Human } from "./mytype.js";

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const adrian = new User("Adrian", 18);

console.log(adrian);
