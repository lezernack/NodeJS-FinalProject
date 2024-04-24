const express = require("express");
const app = express();

const PORT = 3000;

app.use("/", require("./routes/connect"));

app.listen(PORT, console.log(`listening on port: ${PORT}`));
