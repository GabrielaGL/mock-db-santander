const fs = require("fs");
const path = require("path");
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require('cors');
const middlewares = jsonServer.defaults()


const app = jsonServer.create();
app.use(cors());
const router = jsonServer.router(path.join(__dirname, "db.json"));

const port = process.env.PORT || 8080;


// /!\ Bind the router db to the app
app.db = router.db;


app.use(middlewares);
app.use(router);
app.listen(port, () => {
  console.log(`JSON Server is running in ${port}`);
});
