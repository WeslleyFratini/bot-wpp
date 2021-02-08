var stages = {
  0: {
    descricao: "Boas vindas",
    obj: require("./stages/0"),
  },
  1: {
    descricao: "Vendas",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Resumo",
    obj: require("./stages/2"),
  },
  3: {
    descricao: "Endereço",
    obj: require("./stages/3"),
  },
  4: {
    descricao: "Encerramen to",
    obj: require("./stages/4"),
  },
};

exports.step = stages;
