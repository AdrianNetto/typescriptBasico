// type guard

function sum(a: number | string, b: number | string) {
  const typeA = typeof a;
  const typeB = typeof b;

  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log(
      `${a} do tipo ${typeA} e ${b} do tipo ${typeB} não são somáveis`
    );
  }
}

sum("4", "59");
sum(12, 42.3);
sum("5", 6);

// checando se o valor existe

function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total);
      console.log(sum);
    } else if (operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total);
      console.log(multiply);
    }
  } else {
    console.log("Por favor, defina uma operação");
  }
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");

// operador insanceof

class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

console.log(jhon);
console.log(paul);

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Olá, ${user.name}. Deseja ver os dados do sistema?`);
  } else if (user instanceof User) {
    console.log(`Olá, ${user.name}. `);
  }
}

userGreeting(jhon);
userGreeting(paul);
