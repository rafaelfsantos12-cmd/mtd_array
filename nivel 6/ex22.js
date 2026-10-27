let musicas = [
    "Aquarela",
    "Evidências",
    "Pais e Filhos",
    "Anna Júlia",
    "Tempo Perdido",
    "Velha Infância",
    "Meu Erro",
    "Trem Bala"
];

console.log("A música existe?");
console.log(musicas.includes("Evidências"));

console.log("Posição da música:");
console.log(musicas.indexOf("Evidências"));

let selecao = musicas.slice(0, 3);

console.log("Seleção de músicas:");
console.log(selecao);

musicas.splice(2, 1);

console.log("Playlist sem uma música:");
console.log(musicas);

musicas.sort();

console.log("Playlist ordenada:");
console.log(musicas);

musicas.reverse();

console.log("Playlist invertida:");
console.log(musicas);

console.log("Playlist final:");
console.log(musicas.join(", "));