//Podemos precisar descrever o tipo de variáveis ​​que não conhecemos quando estamos escrevendo
//um aplicativo.
//Esses valores podem vir de conteúdo dinâmico, por exemplo, do usuário ou de uma biblioteca de terceiros
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

console.log(notSure);
