import React, { createContext } from "react";

// importação de componentes

import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Desctucturing, { Category } from "./components/Desctucturing";

// useState

import State from "./components/State";
import Context from "./components/Context";

// type

type textOrNull = string | null;

type fixed = "isso" | "aquilo";

// context

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  //variaveis

  const name: string = "Adrian";
  const age: number = 18;
  const isWorking: boolean = true;

  // funções

  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // types

  const mytext: textOrNull = "Tem um texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "opa";

  // const testFixed: fixed = "isso";

  // context

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  // desestruturando props

  return (
    <AppContext.Provider value={contextValue}>
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
        category={Category.TS}
      />
      <Desctucturing
        title="Segundo post"
        content="Content"
        commentsQty={5}
        tags={["ruby"]}
        category={Category.RB}
      />
      <State />
      {mytext && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
