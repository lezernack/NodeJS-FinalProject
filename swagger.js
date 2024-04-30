const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "My College ranking API",
    description: "An API that shows college ranking data",
  },
  host: "nodejs-finalproject-6ngt.onrender.com",
  schemes: ["https"],
};

const outputfile = "./swagger.json";
const endpointFiles = ["./routes/connect.js"];

// Run to
swaggerAutogen(outputfile, endpointFiles, doc);

// Generates the swager.json file
swaggerAutogen(outputfile, endpointFiles, doc).then(async () => {
  await import("./server.js");
});
