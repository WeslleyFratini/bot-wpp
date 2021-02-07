
const sulla = require('sulla');
 
sulla.create().then((client) => start(client));
 
function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi') {
      client.sendText(message.from, '👋 Hello from sulla!');
    }
  });
}