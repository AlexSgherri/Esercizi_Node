import figlet from "figlet";
import { createServer } from "node:http";


const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    response.end(data)
});
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});