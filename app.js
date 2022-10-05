const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    console.log("request received");

    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    const jsonResponseBody = JSON.stringify({ location: "Earth" });

    response.end("Welcome to the World Wide Web!");
  });
}

module.exports = createApp;
