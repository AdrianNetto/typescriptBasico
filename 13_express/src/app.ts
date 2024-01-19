// iniciando projeto
// console.log("express + TS");

// init express
import express, { NextFunction, Request, Response } from "express";

const app = express();

const port = 3000;

const url = "http://localhost:3000/";

app.use(express.json());

// middlewares para todas as rotas

function showpath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showpath);

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

// router handler

app.get("/api/user/:id", getUser);

function getUser(req: Request, res: Response) {
  console.log(`Resgatando o user com o id: ${req.params.id}`);

  return res.send("O usuário foi encontrado");
}

// middlewares

function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode seguir");
    next();
  } else {
    console.log("acesso restrito!");
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "Bem-vindo à área de administração!" });
});

//request e response em generics

app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    if (req.params.id === "1") {
      console.log(`ID: ${req.params.id}`);
      console.log(`Name: ${req.params.name}`);

      return res.json({ status: true });
    } else {
      console.error(404, "User no found");
      return res.json({ status: false });
    }
  }
);

// tratando erros

app.get("/api/error", (req: Request, res: Response) => {
  try {
    throw new Error("Algo deu errado!");
  } catch (e: any) {
    res.status(500).json({
      status: res.statusCode,
      error: "Internal server error",
      msg: e.message
    });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on ${url} 🚀`);
});
