let produtos = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Leite",
    "Café",
    "Açúcar"
];

console.log("Café existe?");
console.log(produtos.includes("Café"));

console.log("Posição do Café:");
console.log(produtos.indexOf("Café"));

let copia = produtos.slice(0, 3);

console.log("Cópia parcial:");
console.log(copia);

produtos.splice(3, 1);

console.log("Lista sem Leite:");
console.log(produtos);

console.log("Lista em texto:");
console.log(produtos.join(", "));