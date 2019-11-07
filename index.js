const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

const middleware = cors();
app.use(middleware);

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);

const eventRouter = require("./router");
app.use(eventRouter);

app.listen(process.env.PORT || port, () =>
	console.log("Listening on port:" + port)
);
