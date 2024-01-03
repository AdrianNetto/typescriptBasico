// tipo de objeto para função com interface

interface Product {
  name: string
  price: number
  isAvailable: boolean
}

function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
  if(product.isAvailable) {
    console.log("O produto está disponível")
  }
}

const shirt:Product = {
  name: "Camisa",
  price: 59.99,
  isAvailable: true
}

showProductDetails(shirt)

const pant:Product = {
  name: "Calça",
  price: 29.99,
  isAvailable: false
}