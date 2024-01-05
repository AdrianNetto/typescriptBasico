// Campos em classes

class User {
  name!: string;
  age!: number;
}

const adrian = new User();

console.log(adrian);

adrian.name = "Adrian";

console.log(adrian)