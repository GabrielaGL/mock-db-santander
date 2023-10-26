const fs = require('fs');
const path = require('path');
const jsonServer = require("json-server");
const server = jsonServer.create();
const auth = require('json-server-auth');
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(middlewares);
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const rules = auth.rewriter(JSON.parse(fs.readFileSync(path.join(__dirname, 'routes.json'))));

server.use(rules);
server.use(cors());
server.listen(8080, () => {
  console.log("JSON Server is running");
});