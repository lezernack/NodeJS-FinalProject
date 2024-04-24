const express = require("experss");
const app = express();

const PORT = 3000;

app.use(PORT);

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
