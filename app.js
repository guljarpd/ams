const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.json({
    type: "application/json"
  })
);

/* APIs route */
require("./routers")(app);

app.get("/", (req, res) => {
  logger.info("Root domain requested.");
  return res.status(200).json({
    data: "Welcome to Gerald Airlines"
  });
});

// handle error
app.use(function (req, res, next) {
    return res.status(404).json({
        error: "Unknown method"
      });
});

// define server port here
const port = 8181;
const server = http.createServer(app);
server.listen(port);
console.log("Listening on port " + port);


