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

setTimeout(function() {
  const sallary: number = 1000;

  // console.log(parseFloat(sallary))

  // console.log(sallary)
}, 2000)




