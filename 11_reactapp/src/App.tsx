import React from "react";

function App() {
  //variaveis

  const name: string = "Adrian";
  const age: number = 18;
  const isWorking: boolean = true;

  // funções

  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  return (
    <div className="App">
      <h1>test</h1>
      <h2>nome: {name}</h2>
      <h2>idade: {age}</h2>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;
