const sulla = require("sulla");
const banco = require("./banco");
const stages = require("./stages");

sulla.create().then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    client.sendText(
      message.from,
      stages.step[getStage(message.from)].obj.execute()
    );
  });
}

function getStage(user) {
  return banco[user].stage;
}
