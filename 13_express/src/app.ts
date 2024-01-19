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

// interfaces do express

app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando as interfaces");
});

// enviando JSON

app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "T-Shirt",
    price: 30.0,
    color: "Black",
    sizes: ["P", "M", "G", "GG", "XG"],
  });
});

// router parameters

app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === "1") {
    const product = {
      id: 1,
      brand: "Chevrolet",
      model: "Chevette",
      engine: "1.6",
      tractionType: "RWD",
    };

    return res.json(product);
  } else {
    return res.send("Produto não encontrado");
  }
});

// rotas complexas

app.get("/api/product/:id/reviews/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);

  const productid = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`Acessando a review ${reviewId} para o produto ${productid}`);
});

app.listen(port, () => {
  console.log(`🚀 Server running on ${url} 🚀`);
});
