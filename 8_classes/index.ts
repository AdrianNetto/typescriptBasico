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

// setters

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
    return `X: ${this.x} e Y: ${this.y} inseridos com sucesso`;
  }
}

const myCoords = new Coords();

myCoords.fillX = 15;
myCoords.fillY = 50;

console.log(myCoords);
console.log(myCoords.getCoords);

// herança de interfaces -- implements

interface showTitle {
  itemTiltle(): string;
}

class blogPost implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTiltle() {
    return `O título do post é: ${this.title}`;
  }
}

const myPost = new blogPost("Hello World!");

console.log(myPost.itemTiltle());

class Test implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTiltle() {
    return `O título é: ${this.title}`;
  }
}

// Override

class Base {
  someMethod() {
    console.log("alguma coisa");
  }
}

class Nova extends Base {
  someMethod() {
    console.log("testando outra coisa");
  }
}

const myObject = new Nova();

myObject.someMethod();

//visibilidade -> public

class C {
  public x = 10;
}

class D extends C {}

const cInstance = new C();

console.log(cInstance.x);

const dInstance = new D();

console.log(dInstance.x);

// protected

class E {
  protected x = 10;

  protected protectedMethod() {
    console.log("Este método é protegido");
  }
}

class F extends E {
  showX() {
    console.log("X: " + this.x);
  }

  showProtectedMethod() {
    this.protectedMethod();
  }
}

const fInstance = new F();
fInstance.showX;

fInstance.showProtectedMethod();

// private

class PrivateClass {
  private name = "Private";

  showName() {
    return this.name;
  }

  private privateMethod() {
    console.log("metodo privado");
  }

  showPrivateMethod() {
    this.privateMethod();
  }
}

const pObj = new PrivateClass();

// console.log(pObj.showName)

console.log(pObj.showName());
pObj.showPrivateMethod();

// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }

// static members

class StaticMembers {
  static prop = "teste static";

  static staticMethod() {
    console.log("Este é um método estático");
  }
}

console.log(StaticMembers.prop);

StaticMembers.staticMethod();

// generic class

class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O first é: ${this.first}`;
  }
}

const newItem = new Item("caixa", "surpresa");

console.log(newItem);

console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);

const secondItem = new Item(12, true);

console.log(secondItem.showFirst);
console.log(typeof secondItem.first);

// parameters properties

class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showQTY() {
    return this.qty;
  }
  get showPrice() {
    return this.price;
  }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99);

console.log(newShirt.name);
console.log(newShirt.showQTY);
console.log(newShirt.showPrice);

// class expressions

const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("Adrian");

console.log(pessoa);
console.log(pessoa.name);

// abstract class

abstract class AbstractClass {
  abstract showName(): void;
}

class AbstractExample extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName() {
    console.log(`O nome é ${this.name}`);
  }
}

const absEx = new AbstractExample("Adrian");

console.log(absEx);

absEx.showName();

// relação entre classes

class Dog {
  name!: string;
}

class Cat {
  name!: string;
}

const doguinho: Dog = new Cat();

console.log(doguinho);
