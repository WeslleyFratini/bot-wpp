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
    obj: "arquivo0.js",
  },
  3: {
    descricao: "Endereço",
    obj: "arquivo0.js",
  },
  4: {
    descricao: "Encerramen to",
    obj: "arquivo0.js",
  },
};

exports.step = stages;
