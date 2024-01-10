import React from "react";

// importação de componentes

import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Desctucturing from "./components/Desctucturing";

// useState

import State from "./components/State";

function App() {
  //variaveis

  const name: string = "Adrian";
  const age: number = 18;
  const isWorking: boolean = true;

  // funções

  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // desestruturando props

  return (
    <div className="App">
      <h1>test</h1>
      <h2>nome: {name}</h2>
      <h2>idade: {age}</h2>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo componente" />
      <Desctucturing
        title="Primeiro post"
        content="New Post"
        commentsQty={10}
        tags={["ts", "js"]}
      />
            <Desctucturing
        title="Segundo post"
        content="Content"
        commentsQty={5}
        tags={["java"]}
      />
      <State />
    </div>
  );
}

export default App;
