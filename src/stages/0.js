const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg) {
  let menu = "CARDAPIO \n \n";

  Object.keys(cardapio.menu).forEach((value) => {
    let element = cardapio.menu[value];
    menu += `${value} - ${element.descricao}   R$ ${element.preco} \n `;
  });

  banco.db[user].stage = 1;

  return [
    "ola, sou um assistente virtual,irei apresentar o cardapio. Para fazer um pedido, basta enviar o codigo do produto",
    menu,
  ];
}

exports.execute = execute;
