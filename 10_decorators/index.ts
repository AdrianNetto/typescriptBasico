// exemplo decorator

function myDecorator() {
  console.log("Iniciando decorator!");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class MyClass {
  @myDecorator()
  testing() {
    console.log("terminando execução do método! ");
  }
}

const myObj = new MyClass();

myObj.testing();

// multiplos decorators

function a() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou a.");
  };
}

function b() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou b.");
  };
}

function c() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou c.");
  };
}

class MultipleDecorators {
  @c()
  @a()
  @b()
  testing() {
    console.log("Terminando execução");
  }
}

const multiple = new MultipleDecorators();

multiple.testing();

// class decorator

function classDec(constructor: Function) {
  console.log(constructor.name);
  if (constructor.name === "User") {
    console.log("Criando Usuário!");
  }
}

@classDec
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const adrian = new User("Adrian");

console.log(adrian);

// Decorator de método

function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    console.log(this);
    return `O nome da máquina é: ${this.name}`;
  }
}

const trator = new Machine("Valtra");

console.log(trator.showName());

// Accessor decorator

class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `O nome do monstro é: ${this.name}`;
  }

  @enumerable(false)
  get showAge() {
    return `O nome do monstro é: ${this.age}`;
  }
}

const blastoise = new Monster("Blastoise", 10);

console.log(blastoise);

// proerty decorator

function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      value = newVal.padStart(5, "0");
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID("1");

console.log(newItem.id);

// Exemplo real: Class decorator

function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);

const pen = new Pen(55);

console.log(newBook);
console.log(pen);

console.log(newBook.createdAt);
console.log(pen.createdAt);

// Exemplo real: Method decorator

function checkIfUserPosted() {
  return function (
    target: object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("The user has already posted!");
        return null;
      } else {
        return originalMethod.apply(this, args);
      }
    };

    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    if (!this.alreadyPosted) {
      this.alreadyPosted = true;
      console.log(`Post: ${content}`);
    } else {
      console.log("You cannot post again. You have already posted.");
    }
  }
}

const newPost = new Post();

newPost.post("My first post!", newPost.alreadyPosted);
newPost.post("My second post!", newPost.alreadyPosted);
newPost.post("My second post!", newPost.alreadyPosted);

//Exemplo real: property decorator

function Max(limit: number) {
  return function (target: object, property: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} caracteres`);
        return;
      } else {
        value = newVal;
      }
    };

    Object.defineProperties(target, {
      [property]: {
        get: getter,
        set: setter,
      },
    });
  };
}

class Admin {
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

let pedro = new Admin("pedroadmin123123");
console.log(pedro.username);

let lee = new Admin("leeADM");
console.log(lee.username);
