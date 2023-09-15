 const cliente = {
    nome: "Jeflen",
    idade: 30,
    cpf: "123456789",
    email: "alura@Alura.com",
 };

 console.log(`O numero do cpf desse cliente é ${cliente.cpf} e essa pessoa tem ${cliente.idade} anos.`); 

 console.log(`Os 3º primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`)