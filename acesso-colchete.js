const cliente = {
    nome: "Jeflen",
    idade: 30,
    cpf: "123456789",
    email: "alura@Alura.com",
 };

 console.log(`O numero do cpf desse cliente é ${cliente["cpf"]} e essa pessoa tem ${cliente["idade"]} anos.`); 

 console.log(`Os 3º primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`)

 const chaves = ["nome","idade","cpf","email", "Time de Coração"];

 chaves.forEach ( (chave) => {
    console.log (`A chave ${chave} tem valor ${cliente[chave]}`);
 });


 