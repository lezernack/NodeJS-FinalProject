const mongodb = require("./db/connect");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(cors())
  .use(express.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes/connect"));

app.listen(PORT, console.log(`listening on port: ${PORT}`));
