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
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const joao = new NewUser("João", 22)

console.log(joao)