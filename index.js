const sulla = require("sulla");

sulla.create().then((client) => start(client));

var banco = {
  user1: {
    stage: 0,
  },
  user2: {
    stage: 0,
  },
};

var stages = {
  0: {
    descricao: "Boas vindas",
    obj: require("./0"),
  },
  1: {
    descricao: "Vendas",
    obj: require("./1"),
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
    descricao: "Encerramento",
    obj: "arquivo0.js",
  },
};

function getStage(user) {
  return banco[user].stage;
}

function start(client) {
  client.onMessage((message) => {
    if (message.body === "Hi") {
      client.sendText(message.from, "👋 Hello from sulla!");
    }
  });
}
