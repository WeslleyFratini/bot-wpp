const sulla = require("sulla");
const banco = require("./banco");
const stages = require("./stages");

sulla.create().then((client) => start(client));

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
