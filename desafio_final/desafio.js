let alunos = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Lucas",
    "Carlos",
    "Paulo",
    "Julia",
    "Rafael",
    "Beatriz"
];

console.log("1 - Verificar aluno");
console.log("2 - Encontrar posição");
console.log("3 - Criar parte da lista");
console.log("4 - Remover aluno");
console.log("5 - Inserir aluno");
console.log("6 - Ordenar alunos");
console.log("7 - Inverter lista");
console.log("8 - Exibir lista em texto");

let opcao = prompt("Escolha uma operação:");

if (opcao == "1") {
    let nome = prompt("Digite o nome do aluno:");

    console.log(alunos.includes(nome));

} else if (opcao == "2") {
    let nome = prompt("Digite o nome do aluno:");

    console.log(alunos.indexOf(nome));

} else if (opcao == "3") {
    let parte = alunos.slice(0, 5);

    console.log(parte);

} else if (opcao == "4") {
    let nome = prompt("Digite o nome para remover:");
    let posicao = alunos.indexOf(nome);

    if (posicao != -1) {
        alunos.splice(posicao, 1);
        console.log(alunos);
    } else {
        console.log("Aluno não encontrado");
    }

} else if (opcao == "5") {
    let nome = prompt("Digite o nome do novo aluno:");

    alunos.splice(alunos.length, 0, nome);

    console.log(alunos);

} else if (opcao == "6") {
    alunos.sort();

    console.log(alunos);

} else if (opcao == "7") {
    alunos.reverse();

    console.log(alunos);

} else if (opcao == "8") {
    console.log(alunos.join(", "));

} else {
    console.log("Opção inválida");
}