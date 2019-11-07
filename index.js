const express = require("express");
const db = require("./db");
const Event = require("./Event");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(Event);
app.listen(process.env.PORT || port, () =>
	console.log("Listening on port:" + port)
);
