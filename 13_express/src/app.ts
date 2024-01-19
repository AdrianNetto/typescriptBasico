// iniciando projeto
// console.log("express + TS");

// init express

import express, { Request, Response } from "express";

const app = express();

const port = 3000;

const url = "http://localhost:3000/";

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello, Express!");
});

// rota com post
app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("Produto adicionado!");
});

// rota para todos os verbos

app.all("/api/product/check", (req, res) => {
  // req.method = VERBO HTTP

  if (req.method === "POST") {
    return res.send("Product posted");
  } else if (req.method === "GET") {
    return res.send(`${req.body} --> test`);
  } else if (req.method === "PUT") {
    return res.send("O serviço de update não está disponível");
  } else if (req.method === "DELETE") {
    return res.send("O serviço de delete não está disponível");
  }
});


app.listen(port, () => {
  console.log(`🚀 Server running on ${url} 🚀`);
});
