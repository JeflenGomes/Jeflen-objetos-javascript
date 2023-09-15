const pessoa = {
    nome: "Jeflen",
    profissao: "Engenheiro"
};

console.log (pessoa.nome);

console.log (pessoa.telefone);

pessoa.telefone = "11 123456789";

console.log (pessoa.telefone);

pessoa.nome = "Jeflen Gomes";

console.log(pessoa);

const novaPessoa = {
    nome: "Pedro",
};

pessoa = novaPessoa;